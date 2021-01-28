import { Request, Response, Router } from 'express';
import Category from '../models/Category';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/all', async (request: Request, response: Response) => {
  const categories = await Category.find();

  return response.json(categories);
});

router.get('/:categoryId', async (request: Request, response: Response) => {
  const category = await Category.findById(request.params.categoryId);

  return response.json(category);
});

router.post('/', async (request: Request, response: Response) => {
  const { name, color } = request.body;

  const category = await Category.create({
    name,
    color,
  });

  return response.status(201).json(category);
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/categories', router);
