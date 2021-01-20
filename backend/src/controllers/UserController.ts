import { Request, Response } from 'express';
import User from '../models/User';

export default {
  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password,
        avatar: 'image.png',
      });

      return response.status(201).json(user);
    }

    return response.status(400).json({ error: 'User already exists.' });
  },
};
