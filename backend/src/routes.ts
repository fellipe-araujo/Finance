import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import FinanceController from './controllers/FinanceController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

routes.post('/register', UserController.store);
routes.post('/authenticate', AuthController.store);
routes.get('/users/all', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/finances', FinanceController.store);
routes.get('/finances/all', FinanceController.index);
routes.get('/finances/:financeId', FinanceController.show);

export default routes;
