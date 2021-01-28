import { Request, Response } from 'express';
import Finance from '../models/Finance';

export default {
  async index(request: Request, response: Response) {
    const finances = await Finance.find().populate(['account', 'category']);

    return response.json(finances);
  },

  async show(request: Request, response: Response) {
    const finance = await Finance.findById(request.params.financeId);

    return response.json(finance);
  },

  async store(request: Request, response: Response) {
    const finance = await Finance.create(request.body);

    return response.status(201).json(finance);
  },
};
