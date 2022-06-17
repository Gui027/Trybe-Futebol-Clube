import { Request, Response } from 'express';
import patchMatchesService from '../services/patchMatchesService';

const patchMatchesController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const matchesById = await patchMatchesService.patchMatchesService(id);

  return res.status(200).json(matchesById);
};

export default {
  patchMatchesController,
};
