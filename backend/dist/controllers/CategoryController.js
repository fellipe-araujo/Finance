"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../models/Category"));
exports.default = {
    async index(request, response) {
        try {
            const categories = await Category_1.default.find({
                user: request.params.userId,
            });
            return response.json(categories);
        }
        catch (error) {
            return response.status(400).json({ error: 'Categories not found.' });
        }
    },
    async show(request, response) {
        try {
            const { userId, categoryId } = request.params;
            const category = await Category_1.default.findOne({
                _id: categoryId,
                user: userId,
            });
            if (category) {
                return response.json(category);
            }
            return response.status(400).json({ error: 'Category not found.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error searching category.' });
        }
    },
    async store(request, response) {
        try {
            const { name, color } = request.body;
            const { userId } = request.params;
            const category = await Category_1.default.create({
                name,
                color,
                user: userId,
            });
            return response.status(201).json(category);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error creating category.' });
        }
    },
    async update(request, response) {
        try {
            const { userId, categoryId } = request.params;
            const category = await Category_1.default.findOneAndUpdate({
                _id: categoryId,
                user: userId,
            }, Object.assign({}, request.body), { new: true });
            return response.json(category);
        }
        catch (error) {
            return response.status(400).json({ error: 'Error updating category.' });
        }
    },
    async delete(request, response) {
        try {
            const { userId, categoryId } = request.params;
            await Category_1.default.findOneAndRemove({
                _id: categoryId,
                user: userId,
            });
            return response.json({ message: 'Category deleted.' });
        }
        catch (error) {
            return response.status(400).json({ error: 'Error deleting category.' });
        }
    },
};
