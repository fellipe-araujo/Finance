"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const TransactionController_1 = __importDefault(require("./controllers/TransactionController"));
const CategoryController_1 = __importDefault(require("./controllers/CategoryController"));
const AccountController_1 = __importDefault(require("./controllers/AccountController"));
const ObjectiveController_1 = __importDefault(require("./controllers/ObjectiveController"));
const auth_1 = __importDefault(require("./middlewares/auth"));
const routes = express_1.Router();
routes.use(auth_1.default);
// AUTH
routes.post('/authenticate', AuthController_1.default.store);
// USERS
routes.get('/users/all', UserController_1.default.index);
routes.get('/users/:userId', UserController_1.default.show);
routes.post('/register', UserController_1.default.store);
routes.put('/users/:userId/update', UserController_1.default.update);
routes.delete('/users/:userId/delete', UserController_1.default.delete);
// TRANSACTIONS
routes.post('/users/:userId/accounts/:accountId/transactions', TransactionController_1.default.store);
routes.get('/users/:userId/transactions/all', TransactionController_1.default.index);
routes.get('/users/:userId/transactions/:transactionId', TransactionController_1.default.show);
routes.delete('/users/:userId/transactions/:transactionId/delete', TransactionController_1.default.delete);
// CATEGORIES
routes.post('/users/:userId/categories', CategoryController_1.default.store);
routes.get('/users/:userId/categories/all', CategoryController_1.default.index);
routes.get('/users/:userId/categories/:categoryId', CategoryController_1.default.show);
routes.put('/users/:userId/categories/:categoryId/update', CategoryController_1.default.update);
routes.delete('/users/:userId/categories/:categoryId/delete', CategoryController_1.default.delete);
// ACCOUNTS
routes.post('/users/:userId/accounts', AccountController_1.default.store);
routes.get('/users/:userId/accounts/all', AccountController_1.default.index);
routes.get('/users/:userId/accounts/:accountId', AccountController_1.default.show);
routes.put('/users/:userId/accounts/:accountId/update', AccountController_1.default.update);
routes.delete('/users/:userId/accounts/:accountId/delete', AccountController_1.default.delete);
// OBJECTIVES
routes.post('/users/:userId/objectives', ObjectiveController_1.default.store);
routes.get('/users/:userId/objectives/all', ObjectiveController_1.default.index);
routes.get('/users/:userId/objectives/:objectiveId', ObjectiveController_1.default.show);
routes.put('/users/:userId/objectives/:objectiveId/update', ObjectiveController_1.default.update);
routes.delete('/users/:userId/objectives/:objectiveId/delete', ObjectiveController_1.default.delete);
exports.default = routes;
