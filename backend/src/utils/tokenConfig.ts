import jwt from 'jsonwebtoken';
import * as authConfig from '../config/auth';

export const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 604800,
  });
};
