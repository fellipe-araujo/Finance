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
      const finance = await Finance.findById(request.params.financeId);

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

      const account: any = await Account.findById(accountId);

      let transactionAccount: number = 0.0;

      if (finance.expense === false) {
        transactionAccount = account.balance + finance.price;
      } else {
        transactionAccount = account.balance - finance.price;
      }

      await account?.update({ balance: transactionAccount });
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

      const finance: any = await Finance.findById(financeId);

      if (finance?.user == userId) {
        await finance.deleteOne({ _id: financeId });
        return response.json({ message: 'Finance deleted.' });
      } else if (finance?.user != userId) {
        return response
          .status(401)
          .json({
            message: 'You dont have authorization to delete this finance.',
          });
      }

      return response.status(400).json({ message: 'Finance not found.' });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: 'Error deleting finance.' });
    }
  },
};
