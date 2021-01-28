import { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/tokenConfig';

export default {
  async index(request: Request, response: Response) {
    try {
      const users = await User.find();

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: 'Users not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const user = await User.findById(request.params.userId);

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: 'User not found.' });
    }
  },

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
        .json({ user, token: generateToken({ id: user._id }) });
    }

    return response.status(400).json({ error: 'User already exists.' });
  },

  async update(request: Request, response: Response) {
    try {
      const { name } = request.body;

      const user = await User.findByIdAndUpdate(
        request.params.userId,
        {
          name,
        },
        { new: true }
      );

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: 'Error updating user.' });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      await User.findByIdAndDelete(request.params.userId);

      return response.json({ message: 'User deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting user.' });
    }
  },
};
