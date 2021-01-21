import { Router } from 'express';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import CategoryController from './controllers/CategoryController';

import authMiddleware from './middlewares/auth';

const routes = Router();

routes.use(authMiddleware);

routes.get('/categories', CategoryController.index);
routes.post('/register', UserController.store);
routes.post('/authenticate', AuthController.store);

export default routes;
