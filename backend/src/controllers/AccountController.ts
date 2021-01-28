import { Request, Response } from 'express';
import Account from '../models/Account';

export default { 
  async index(request: Request, response: Response) {
    try {
      const accounts = await Account.find();

      return response.json(accounts);
    } catch (error) {
      return response.status(400).json({ error: 'Accounts not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const account = await Account.findById(request.params.accountId);

      return response.json(account);
    } catch (error) {
      return response.status(400).json({ error: 'Account not found.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name, balance } = request.body;
      const { userId } = request.params;

      const account = await Account.create({
        name,
        balance,
        user: userId,
      });
  
      return response.status(201).json(account);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating account.' });
    }
  },

  async update(request: Request, response: Response) {},

  async delete(request: Request, response: Response) {},
};
