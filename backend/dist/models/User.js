"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar: {
        type: String,
        required: false,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});
UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs_1.default.hash(this.password, 10);
    this.password = hash;
    next();
});
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
