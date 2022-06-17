import matches from '../database/models/matches';

const patchMatchesIdService = async (homeTeamGoals: number, awayTeamGoals: number, id: string) => {
  const [matchIdUpdate] = await matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

  return matchIdUpdate;
};

export default {
  patchMatchesIdService,
};
