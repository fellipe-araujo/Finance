import { Request, Response } from 'express';

export default {
  async index(request: Request, response: Response) {
    response.json({ message: 'categories' });
  },
};
