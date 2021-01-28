import { Request, Response, Router } from 'express';
import Account from '../models/Account';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);

router.get('/all', async (request: Request, response: Response) => {
  const accounts = await Account.find();

  return response.json(accounts);
});

router.get('/:accountId', async (request: Request, response: Response) => {
  const account = await Account.findById(request.params.accountId);

  return response.json(account);
});

router.post('/', async (request: Request, response: Response) => {
  const { name, balance } = request.body;

  const account = await Account.create({
    name,
    balance,
  });

  return response.status(201).json(account);
});

module.exports = (app: { use: (arg0: string, arg1: Router) => any }) =>
  app.use('/accounts', router);
