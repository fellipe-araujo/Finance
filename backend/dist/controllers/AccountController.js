"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("../models/Account"));
exports.default = {
    async index(request, response) {
        try {
            const accounts = await Account_1.default.find({
                user: request.params.userId,
            });
            return response.json(accounts);
        }
        catch (error) {
            return response.status(400).json({ error: 'Accounts not found.' });
        }
    },
    async show(request, response) {
        try {
            const { userId, accountId } = request.params;
            const account = await Account_1.default.findOne({
                _id: accountId,
                user: userId,
            });
            if (account) {
                return response.json(account);
            }
            return response.status(400).json({ error: 'Account not found.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Erro searching account.' });
        }
    },
    async store(request, response) {
        try {
            const { name } = request.body;
            const { userId } = request.params;
            const account = await Account_1.default.create({
                name,
                user: userId,
            });
            return response.status(201).json(account);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error creating account.' });
        }
    },
    async update(request, response) {
        try {
            const { name } = request.body;
            const { userId, accountId } = request.params;
            const account = await Account_1.default.findOneAndUpdate({
                _id: accountId,
                user: userId,
            }, {
                name,
            }, { new: true });
            return response.json(account);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error updating account.' });
        }
    },
    async delete(request, response) {
        try {
            const { userId, accountId } = request.params;
            await Account_1.default.findOneAndRemove({
                _id: accountId,
                user: userId,
            });
            return response.json({ message: 'Account deleted.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error deleting account.' });
        }
    },
};
