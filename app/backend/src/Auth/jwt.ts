import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

// const SECRET = '12345';
const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwtConfig = {
  expiresIn: '2d',
};

const generateToken = (payload = {}) => {
  const token = jwt.sign(payload, SECRET, jwtConfig);

  return token;
};

const validateToken = (token: string) => {
  const verifiedToken = jwt.verify(token, SECRET);
  return verifiedToken;
};

const validateDecode = (token: string) => {
  const decode = jwt.decode(token);
  return decode;
};

export default {
  generateToken,
  validateToken,
  validateDecode,
};
