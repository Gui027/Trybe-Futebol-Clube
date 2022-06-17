import { Request, Response } from 'express';
import matches from '../database/models/matches';

const postMatchesController = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const { id } = req.params;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
  const createMatch = await matches.create({
    homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress });

  if (!id) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  return res.status(201).json(createMatch);
};

export default {
  postMatchesController,
};
