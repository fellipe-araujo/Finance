import { Request, Response } from 'express';
import Category from '../models/Category';

export default {
  async index(request: Request, response: Response) {
    const categories = await Category.find();

    return response.json(categories);
  },

  async show(request: Request, response: Response) {
    const category = await Category.findById(request.params.categoryId);

    return response.json(category);
  },

  async store(request: Request, response: Response) {
    const { name, color } = request.body;

    const category = await Category.create({
      name,
      color,
    });

    return response.status(201).json(category);
  },
};
