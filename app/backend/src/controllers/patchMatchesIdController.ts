import { Request, Response } from 'express';
import patchMatchesIdService from '../services/patchMatchesIdService';

const upddateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;

  const matchesUpdate = await patchMatchesIdService.patchMatchesIdService(
    homeTeamGoals,
    awayTeamGoals,
    id,
  );

  return res.status(200).json(matchesUpdate);
};

export default {
  upddateById,
};
