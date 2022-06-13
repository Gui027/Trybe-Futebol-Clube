import { Request, Response } from 'express';
import LoginService from '../services/postLoginService';
import JWT from '../Auth/jwt';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userService = await LoginService.loginService(email, password);

  if (userService?.erros) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const token = JWT.generateToken({ email });

  return res.status(200).json({
    user: userService,
    token,
  });
};

export default {
  loginController,
};
