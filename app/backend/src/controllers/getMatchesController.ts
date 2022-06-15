import { Request, Response } from 'express';
import getMatchesService from '../services/getMatchesService';

const getMatchesController = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const matchesService = await getMatchesService.getMatches();

  if (!inProgress) {
    return res.status(200).json(matchesService);
  }

  const matchesInProgress = await getMatchesService.inProgressFilter(inProgress as string);

  return res.status(200).json(matchesInProgress);
};

export default {
  getMatchesController,
};
