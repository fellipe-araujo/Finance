"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Objective_1 = __importDefault(require("../models/Objective"));
exports.default = {
    async index(request, response) {
        try {
            const objectives = await Objective_1.default.find({
                user: request.params.userId,
            });
            return response.json(objectives);
        }
        catch (error) {
            return response.status(400).json({ error: 'Objectives not found.' });
        }
    },
    async show(request, response) {
        try {
            const { userId, objectiveId } = request.params;
            const objective = await Objective_1.default.findOne({
                _id: objectiveId,
                user: userId,
            });
            if (objective) {
                return response.json(objective);
            }
            return response.status(400).json({ error: 'Objective not found.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error searching objective.' });
        }
    },
    async store(request, response) {
        try {
            const { name, goal, description } = request.body;
            const { userId } = request.params;
            const objective = await Objective_1.default.create({
                name,
                goal,
                description,
                user: userId,
            });
            return response.status(201).json(objective);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error creating objective.' });
        }
    },
    async update(request, response) {
        try {
            const { userId, objectiveId } = request.params;
            const objective = await Objective_1.default.findOneAndUpdate({
                _id: objectiveId,
                user: userId,
            }, Object.assign({}, request.body), {
                new: true,
            });
            return response.json(objective);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error updating objective.' });
        }
    },
    async delete(request, response) {
        try {
            const { userId, objectiveId } = request.params;
            await Objective_1.default.findOneAndRemove({
                _id: objectiveId,
                user: userId,
            });
            return response.json({ message: 'Objective deleted.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error deleting objective.' });
        }
    },
};
