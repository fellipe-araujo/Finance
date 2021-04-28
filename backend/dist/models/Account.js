"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AccountSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0.0,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});
const Account = mongoose_1.default.model('Account', AccountSchema);
exports.default = Account;
