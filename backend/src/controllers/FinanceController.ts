import { Request, Response, Router } from 'express';
import Finance from '../models/Finance';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/all', async (request: Request, response: Response) => {
  const finances = await Finance.find().populate(['account', 'category']);

  return response.json(finances);
});

router.get('/:financeId', async (request: Request, response: Response) => {
  const finance = await Finance.findById(request.params.financeId);

  return response.json(finance);
});

router.post('/', async (request: Request, response: Response) => {
  const finance = await Finance.create(request.body);

  return response.status(201).json(finance);
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/finances', router);
