import { Request, Response } from 'express';
import Category from '../models/Category';

export default {
  async index(request: Request, response: Response) {
    try {
      const categories = await Category.find({
        user: request.params.userId,
      });

      return response.json(categories);
    } catch (error) {
      return response.status(400).json({ error: 'Categories not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const { userId, categoryId } = request.params;

      const category: any = await Category.findOne({
        _id: categoryId,
        user: userId,
      });

      return response.json(category);
    } catch (error) {
      return response.status(400).json({ error: 'Category not found.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name, color } = request.body;
      const { userId } = request.params;

      const category = await Category.create({
        name,
        color,
        user: userId,
      });

      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating category.' });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { userId, categoryId } = request.params;

      const category: any = await Category.findOneAndUpdate(
        {
          _id: categoryId,
          user: userId,
        },
        {
          ...request.body,
        },
        { new: true }
      );

      return response.json(category);
    } catch (error) {
      return response.status(400).json({ error: 'Error updating category.' });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { userId, categoryId } = request.params;

      await Category.findOneAndRemove({
        _id: categoryId,
        user: userId,
      });

      return response.json({ message: 'Category deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting category.' });
    }
  },
};
