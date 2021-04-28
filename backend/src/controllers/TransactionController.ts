import { Request, Response } from 'express';
import Account from '../models/Account';
import Transaction from '../models/Transaction';

export default {
  async index(request: Request, response: Response) {
    try {
      const transactions = await Transaction.find({
        user: request.params.userId,
      }).populate(['account', 'category']);

      return response.json(transactions);
    } catch (error) {
      return response.status(400).json({ error: 'Transactions not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { userId, transactionId } = request.params;

      const transaction = await Transaction.findOne({
        _id: transactionId,
        user: userId,
      }).populate(['account', 'category']);

      if (transaction) {
        return response.json(transaction);
      }

      return response.status(400).json({ error: 'Transaction not found.' });
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Error searching transaction.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name, expense, price, date, category } = request.body;
      const { userId, accountId } = request.params;

      const transaction: any = await Transaction.create({
        name,
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

      if (transaction.expense === false) {
        transactionAccount = account.balance + transaction.price;
      } else {
        transactionAccount = account.balance - transaction.price;
      }

      await account?.updateOne({ balance: transactionAccount });
      await account.save();

      return response.status(201).json(transaction);
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Error creating transaction.' });
    }
  },

  async update(request: Request, response: Response) {},

  async delete(request: Request, response: Response) {
    try {
      const { userId, transactionId } = request.params;

      await Transaction.findOneAndRemove({
        _id: transactionId,
        user: userId,
      });

      return response.json({ message: 'Transaction deleted.' });
    } catch (error) {
      return response
        .status(400)
        .json({ error: 'Error deleting transaction.' });
    }
  },
};
