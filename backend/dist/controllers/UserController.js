"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const tokenConfig_1 = require("../utils/tokenConfig");
exports.default = {
    async index(request, response) {
        try {
            const users = await User_1.default.find();
            return response.json(users);
        }
        catch (error) {
            return response.status(400).json({ error: 'Users not found.' });
        }
    },
    async show(request, response) {
        try {
            const user = await User_1.default.findById(request.params.userId);
            return response.json(user);
        }
        catch (error) {
            return response.status(400).json({ error: 'User not found.' });
        }
    },
    async store(request, response) {
        const { name, email, password } = request.body;
        let user = await User_1.default.findOne({ email });
        if (!user) {
            user = await User_1.default.create({
                name,
                email,
                password,
                avatar: 'image.png',
            });
            user.password = undefined;
            return response
                .status(201)
                .json({ user, token: tokenConfig_1.generateToken({ id: user._id }) });
        }
        return response.status(400).json({ error: 'User already exists.' });
    },
    async update(request, response) {
        try {
            const { name } = request.body;
            const user = await User_1.default.findByIdAndUpdate(request.params.userId, {
                name,
            }, { new: true });
            return response.json(user);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error updating user.' });
        }
    },
    async delete(request, response) {
        try {
            await User_1.default.findByIdAndDelete(request.params.userId);
            return response.json({ message: 'User deleted.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error deleting user.' });
        }
    },
};
