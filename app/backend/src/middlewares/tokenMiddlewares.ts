import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import users from '../database/models/users';
import JWT from '../Auth/jwt';

const authToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  if (token === undefined) {
    return res.status(401).json({ message: 'token undefined' });
  }

  const infosToken = JWT.validateToken(token);

  if (!infosToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  const { email } = <jwt.JwtPayload> JWT.validateDecode(token);

  const findRole = await users.findOne({ where: { email } });
  const result = findRole?.role;
  res.status(200).json(result);

  next();
};

export default {
  authToken,
};
