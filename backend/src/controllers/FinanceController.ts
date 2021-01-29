import { Request, Response } from 'express';
import Account from '../models/Account';
import Finance from '../models/Finance';

export default {
  async index(request: Request, response: Response) {
    try {
      const finances = await Finance.find({
        user: request.params.userId,
      }).populate(['account', 'category']);

      return response.json(finances);
    } catch (error) {
      return response.status(400).json({ error: 'Finances not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { userId, financeId } = request.params;

      const finance: any = await Finance.findOne({
        _id: financeId,
        user: userId,
      });

      return response.json(finance);
    } catch (error) {
      return response.status(400).json({ error: 'Finance not found.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { expense, price, date, category } = request.body;
      const { userId, accountId } = request.params;

      const finance: any = await Finance.create({
        expense,
        price,
        date,
        user: userId,
        account: accountId,
        category,
      });

      const account: any = await Account.findOne({
        _id: accountId,
        user: userId,
      });

      let transactionAccount: number = 0.0;

      if (finance.expense === false) {
        transactionAccount = account.balance + finance.price;
      } else {
        transactionAccount = account.balance - finance.price;
      }

      await account?.updateOne({ balance: transactionAccount });
      await account.save();

      return response.status(201).json(finance);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating finance.' });
    }
  },

  async update(request: Request, response: Response) {},

  async delete(request: Request, response: Response) {
    try {
      const { userId, financeId } = request.params;

      await Finance.findOneAndRemove({
        _id: financeId,
        user: userId,
      });

      return response.json({ message: 'Finance deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting finance.' });
    }
  },
};
