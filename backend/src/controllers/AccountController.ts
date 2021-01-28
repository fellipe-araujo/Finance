import { Request, Response } from 'express';
import Account from '../models/Account';

export default { 
  async index(request: Request, response: Response) {
    const accounts = await Account.find();

    return response.json(accounts);
  },

  async show(request: Request, response: Response) {
    const account = await Account.findById(request.params.accountId);

    return response.json(account);
  },

  async store(request: Request, response: Response) {
    const { name, balance } = request.body;

    const account = await Account.create({
      name,
      balance,
    });

    return response.status(201).json(account);
  },

  async update(request: Request, response: Response) {},

  async delete(request: Request, response: Response) {},
};
