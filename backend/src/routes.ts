import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import TransactionController from './controllers/TransactionController';
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

// TRANSACTIONS
routes.post('/users/:userId/accounts/:accountId/finances', TransactionController.store);
routes.get('/users/:userId/finances/all', TransactionController.index);
routes.get('/users/:userId/finances/:financeId', TransactionController.show);
routes.delete('/users/:userId/finances/:financeId/delete', TransactionController.delete);

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
routes.put('/users/:userId/accounts/:accountId/update', AccountController.update);
routes.delete('/users/:userId/accounts/:accountId/delete', AccountController.delete);

// OBJECTIVES
routes.post('/users/:userId/objectives', ObjectiveController.store);
routes.get('/users/:userId/objectives/all', ObjectiveController.index);
routes.get('/users/:userId/objectives/:objectiveId', ObjectiveController.show);
routes.put('/users/:userId/objectives/:objectiveId/update', ObjectiveController.update);
routes.delete('/users/:userId/objectives/:objectiveId/delete', ObjectiveController.delete);

export default routes;