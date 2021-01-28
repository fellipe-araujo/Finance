import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import FinanceController from './controllers/FinanceController';
import CategoryController from './controllers/CategoryController';
import AccountController from './controllers/AccountController';
import ObjectiveController from './controllers/ObjectiveController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

// AUTH
routes.post('/authenticate', AuthController.store);

// USERS
routes.get('/users/all', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.post('/register', UserController.store);
routes.put('/users/:userId/update', UserController.update);
routes.delete('/users/:userId/delete', UserController.delete);

// FINANCES
routes.post('/users/:userId/accounts/:accountId/finances', FinanceController.store);
routes.get('/users/:userId/finances/all', FinanceController.index);
routes.get('/users/:userId/finances/:financeId', FinanceController.show);
routes.delete('/users/:userId/finances/:financeId/delete', FinanceController.delete);

// CATEGORIES
routes.post('/users/:userId/categories', CategoryController.store);
routes.get('/users/:userId/categories/all', CategoryController.index);
routes.get('/users/:userId/categories/:categoryId', CategoryController.show);
routes.put('/users/:userId/categories/:categoryId/update', CategoryController.update);
routes.delete('/users/:userId/categories/:categoryId/delete', CategoryController.delete);

// ACCOUNTS
routes.post('/users/:userId/accounts', AccountController.store);
routes.get('/users/:userId/accounts/all', AccountController.index);
routes.get('/users/:userId/accounts/:accountId', AccountController.show);

// OBJECTIVES
routes.post('/users/:userId/objectives', ObjectiveController.store);
routes.get('/users/:userId/objectives/all', ObjectiveController.index);
routes.get('/users/:userId/objectives/:objectiveId', ObjectiveController.show);

export default routes;