import { Request, Response } from 'express';
import getTeamsService from '../services/getTeamsService';

const getTeamsController = async (req: Request, res: Response) => {
  const teamsService = await getTeamsService.getTeams();
  return res.status(200).json(teamsService);
};

export default {
  getTeamsController,
};
