import { Request, Response } from 'express';
import Account from '../models/Account';

export default {
  async index(request: Request, response: Response) {
    try {
      const accounts = await Account.find({
        user: request.params.userId,
      });

      return response.json(accounts);
    } catch (error) {
      return response.status(400).json({ error: 'Accounts not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { userId, accountId } = request.params;

      const account = await Account.findOne({
        _id: accountId,
        user: userId,
      });

      if (account) {
        return response.json(account);
      }

      return response.status(400).json({ error: 'Account not found.' });
    } catch (error) {
      return response.status(400).json({ error: 'Erro searching account.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const { userId } = request.params;

      const account = await Account.create({
        name,
        user: userId,
      });

      return response.status(201).json(account);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating account.' });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const { userId, accountId } = request.params;

      const account: any = await Account.findOneAndUpdate(
        {
          _id: accountId,
          user: userId,
        },
        {
          name,
        },
        { new: true }
      );

      return response.json(account)
    } catch (error) {
      return response.status(400).json({ error: 'Error updating account.' });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { userId, accountId } = request.params;

      await Account.findOneAndRemove({
        _id: accountId,
        user: userId,
      });

      return response.json({ message: 'Account deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting account.' });
    }
  },
};
