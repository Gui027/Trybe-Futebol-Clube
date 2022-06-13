import { compareSync } from 'bcryptjs';
import Iuser from '../Interfaces/user.interface';
import users from '../database/models/users';

const bcryptUse = (password: string, hash: string) => {
  const result = compareSync(password, hash);
  return result;
};

const loginService = async (email: string, password: string) => {
  const user = await users.findOne({ where: { email } }) as Iuser;

  if (!user || !bcryptUse(password, user?.password as string)) {
    return { erros: 'erros' };
  }

  delete user.dataValues?.password;

  return user;
};

export default {
  loginService,
};
