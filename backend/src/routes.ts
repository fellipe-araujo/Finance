import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import FinanceController from './controllers/FinanceController';
import CategoryController from './controllers/CategoryController';
import AccountController from './controllers/AccountController';

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

routes.post('/categories', CategoryController.store);
routes.get('/categories/all', CategoryController.index);
routes.get('/categories/:categoryId', CategoryController.show);

routes.post('/accounts', AccountController.store);
routes.get('/accounts/all', AccountController.index);
routes.get('/accounts/:accountId', AccountController.show);

export default routes;
