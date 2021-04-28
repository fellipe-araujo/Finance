"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectiveSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    goal: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        default: 0.0,
    },
    progress: {
        type: Number,
        default: 0.0,
    },
    description: {
        type: String,
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
const Objective = mongoose_1.default.model('Objective', ObjectiveSchema);
exports.default = Objective;
