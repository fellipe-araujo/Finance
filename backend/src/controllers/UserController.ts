import { Request, Response, Router } from 'express';
import User from '../models/User';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/all', async (request: Request, response: Response) => {
  const users = await User.find();

  return response.json(users);
});

router.get('/:_id', async (request: Request, response: Response) => {
  const { _id } = request.params;

  const user = await User.findOne({ _id });

  return response.json(user);
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/users', router);
