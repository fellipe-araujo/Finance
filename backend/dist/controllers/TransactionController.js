"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("../models/Account"));
const Transaction_1 = __importDefault(require("../models/Transaction"));
exports.default = {
    async index(request, response) {
        try {
            const transactions = await Transaction_1.default.find({
                user: request.params.userId,
            }).populate(['account', 'category']);
            return response.json(transactions);
        }
        catch (error) {
            return response.status(400).json({ error: 'Transactions not found.' });
        }
    },
    async show(request, response) {
        try {
            const { userId, transactionId } = request.params;
            const transaction = await Transaction_1.default.findOne({
                _id: transactionId,
                user: userId,
            }).populate(['account', 'category']);
            if (transaction) {
                return response.json(transaction);
            }
            return response.status(400).json({ error: 'Transaction not found.' });
        }
        catch (error) {
            return response
                .status(400)
                .json({ error: 'Error searching transaction.' });
        }
    },
    async store(request, response) {
        try {
            const { name, expense, price, date, category } = request.body;
            const { userId, accountId } = request.params;
            const transaction = await Transaction_1.default.create({
                name,
                expense,
                price,
                date,
                user: userId,
                account: accountId,
                category,
            });
            const account = await Account_1.default.findOne({
                _id: accountId,
                user: userId,
            });
            let transactionAccount = 0.0;
            if (transaction.expense === false) {
                transactionAccount = account.balance + transaction.price;
            }
            else {
                transactionAccount = account.balance - transaction.price;
            }
            await (account === null || account === void 0 ? void 0 : account.updateOne({ balance: transactionAccount }));
            await account.save();
            return response.status(201).json(transaction);
        }
        catch (error) {
            return response
                .status(400)
                .json({ error: 'Error creating transaction.' });
        }
    },
    async update(request, response) { },
    async delete(request, response) {
        try {
            const { userId, transactionId } = request.params;
            await Transaction_1.default.findOneAndRemove({
                _id: transactionId,
                user: userId,
            });
            return response.json({ message: 'Transaction deleted.' });
        }
        catch (error) {
            return response
                .status(400)
                .json({ error: 'Error deleting transaction.' });
        }
    },
};
