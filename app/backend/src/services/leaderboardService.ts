import teams from '../database/models/teams';
import matches from '../database/models/matches';

const calcPoints = (game:matches[]) => {
  const P = game.reduce((acc, match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) return acc + 3;
    if (match.homeTeamGoals === match.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return P;
};

const calcVictory = (game: matches[]) => {
  const V = game.reduce((acc, match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return V;
};

const calcDraws = (game: matches[]) => {
  const D = game.reduce((acc, match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return D;
};

const calcLosses = (game: matches[]) => {
  const L = game.reduce((acc, match) => {
    if (match.homeTeamGoals < match.awayTeamGoals) return acc + 1;
    return acc;
  }, 0);

  return L;
};

const calcGoalsFavor = (game: matches[]) => {
  const GF = game.reduce((acc, match) => match.homeTeamGoals + acc, 0);
  return GF;
};

const calcGoalsOwn = (game: matches[]) => {
  const GO = game.reduce((acc, match) => match.awayTeamGoals + acc, 0);
  return GO;
};

const calcGoalsBalance = (game: matches[]) => {
  const F = calcGoalsFavor(game);
  const O = calcGoalsOwn(game);
  const GB = F - O;
  return GB;
};

const calcEfficiency = (game: matches[]) => {
  const P = calcPoints(game);

  const yieldTeam = ((P / (game.length * 3)) * 100);

  return Number(yieldTeam.toFixed(2));
};

const getAllHome = (match: matches[]) => {
  const points = calcPoints(match);
  const games = Number(match.length);
  const victory = calcVictory(match);
  const draws = calcDraws(match);
  const losses = calcLosses(match);
  const favor = calcGoalsFavor(match);
  const onw = calcGoalsOwn(match);
  const balance = calcGoalsBalance(match);
  const efficiency = calcEfficiency(match); return {
    totalPoints: points,
    totalGames: games,
    totalVictories: victory,
    totalDraws: draws,
    totalLosses: losses,
    goalsFavor: favor,
    goalsOwn: onw,
    goalsBalance: balance,
    efficiency };
};

const createAll = async () => {
  const getTeams = await teams.findAll();

  const teamMap = Promise.all(getTeams.map(async ({ id, teamName }) => {
    const getMatches = await matches.findAll({ where: { homeTeam: id, inProgress: false } });
    const result = getAllHome(getMatches);

    return {
      name: teamName,
      ...result,
    };
  }));

  return teamMap;
};

const order = async () => {
  const resultOrder = await createAll();
  const result = resultOrder.sort((a, b) => b.totalVictories - a.totalVictories
  || b.totalPoints - a.totalPoints
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsOwn
  || b.goalsOwn - a.goalsOwn);
  return result;
};

export default {
  order,
};
