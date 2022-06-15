import { Request, Response } from 'express';
import teams from '../database/models/teams';

const getByIdTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getByIdTeamController = await teams.findByPk(id);

  return res.status(200).json(getByIdTeamController);
};

export default {
  getByIdTeam,
};
