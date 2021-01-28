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
      const category = await Category.findById(request.params.categoryId);

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
      const category = await Category.findByIdAndUpdate(
        request.params.categoryId,
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
      
      const category: any = await Category.findById(categoryId);

      if (category?.user == userId) {
        await category.deleteOne({ _id: categoryId });
        return response.json({ message: 'Category deleted.' });
      } else if (category?.user != userId) {
        return response
          .status(401)
          .json({
            message: 'You dont have authorization to delete this category.',
          });
      }

      return response.status(400).json({ message: 'Category not found.' });
    } catch (error) {
      return response.status(400).json({ error: 'Error deleting category.' });
    }
  },
};
