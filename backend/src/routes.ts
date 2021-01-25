import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import CategoryController from './controllers/CategoryController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

routes.get('/categories', CategoryController.index);
routes.get('/users/all', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/register', UserController.store);
routes.post('/authenticate', AuthController.store);

export default routes;
