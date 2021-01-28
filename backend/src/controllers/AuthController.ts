import { Request, Response, Router } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../utils/tokenConfig';

const router = Router();

router.post('/register', async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  let user: any = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      name,
      email,
      password,
      avatar: 'image.png',
    });

    user.password = undefined;

    return response
      .status(201)
      .json({ user, token: generateToken({ id: user.id }) });
  }

  return response.status(400).json({ error: 'User already exists.' });
});

router.post('/authenticate', async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const user: any = await User.findOne({ email }).select('+password');

  if (!user) {
    return response.status(400).json({ error: 'User not found.' });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return response.status(400).json({ error: 'Invalid password.' });
  }

  user.password = undefined;

  return response.json({ user, token: generateToken({ id: user.id }) });
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/auth', router);
