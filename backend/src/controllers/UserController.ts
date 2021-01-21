import { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/tokenConfig';

export default {
  async store(request: Request, response: Response) {
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
  },
};
