"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const tokenConfig_1 = require("../utils/tokenConfig");
exports.default = {
    async store(request, response) {
        const { email, password } = request.body;
        const user = await User_1.default.findOne({ email }).select('+password');
        if (!user) {
            return response.status(400).json({ error: 'User not found.' });
        }
        if (!(await bcryptjs_1.default.compare(password, user.password))) {
            return response.status(400).json({ error: 'Invalid password.' });
        }
        user.password = undefined;
        return response.json({ user, token: tokenConfig_1.generateToken({ id: user.id }) });
    },
};
