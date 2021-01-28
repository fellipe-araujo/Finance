import { Request, Response } from 'express';
import Category from '../models/Category';

export default {
  async index(request: Request, response: Response) {
    try {
      const categories = await Category.find();

      return response.json(categories);
    } catch (error) {
      return response.status(400).json({ error: 'Categories not found.' });
    }
  },

  async show(request: Request, response: Response) {
    try {
      const category = await Category.findById(request.params.categoryId);

      return response.json(category);
    } catch (error) {
      return response.status(400).json({ error: 'Category not found.' });
    }
  },

  async store(request: Request, response: Response) {
    try {
      const { name, color } = request.body;

      const category = await Category.create({
        name,
        color,
      });

      return response.status(201).json(category);
    } catch (error) {
      return response.status(400).json({ error: 'Error creating category.' });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { name, color } = request.body;

      const category = await Category.findByIdAndUpdate(
        request.params.categoryId,
        {
          name,
          color,
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
      await Category.findByIdAndRemove(request.params.categoryId);

      return response.json({ message: 'Category deleted.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting category.' });
    }
  },
};
