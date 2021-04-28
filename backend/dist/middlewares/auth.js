"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authConfig = __importStar(require("../config/auth"));
const authMiddleware = (request, response, next) => {
    if (request.path === '/register' || request.path === '/authenticate') {
        return next();
    }
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: 'No token provided.' });
    }
    const parts = authHeader.split(' ');
    if (!(parts.length === 2)) {
        return response.status(401).json({ error: 'Token error.' });
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return response.status(401).json({ error: 'Token malformatted' });
    }
    jsonwebtoken_1.default.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return response.status(401).json({ error: 'Token invalid' });
        }
        request.userId = decoded.id;
        return next();
    });
};
exports.default = authMiddleware;
