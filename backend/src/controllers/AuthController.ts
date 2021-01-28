import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { generateToken } from '../utils/tokenConfig';

export default {
  async store(request: Request, response: Response) {
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
  },
};
