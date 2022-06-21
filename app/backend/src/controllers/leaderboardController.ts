import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboardService';
// import matches from '../database/models/matches';

const getAllHome = async (req: Request, res: Response) => {
  const leaderboardHome = await leaderboardService.order();

  return res.status(200).json(leaderboardHome);
};

export default {
  getAllHome,
};
