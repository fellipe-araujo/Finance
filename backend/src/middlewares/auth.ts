import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as authConfig from '../config/auth';

const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (request.path === '/register' || request.path === '/authenticate') {
    return next();
  }

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'No token provided.' });
  }

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    return response.status(401).json({ error: 'Token error.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ error: 'Token malformatted' });
  }

  jwt.verify(token, authConfig.secret, (err, decoded: any) => {
    if (err) {
      return response.status(401).json({ error: 'Token invalid' });
    }

    request.userId = decoded.id;

    return next();
  });
};

export default authMiddleware;
