"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const secret = process.env.MY_SECRET;
const expiration = '2h';
const authMiddleware = ({ req }) => {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }
    if (!token) {
        return req;
    }
    try {
        const { data } = jsonwebtoken_1.default.verify(token, secret, { maxAge: expiration });
        req.user = data;
    }
    catch {
        console.log('Invalid token');
    }
    return req;
};
exports.authMiddleware = authMiddleware;
const signToken = (userData) => {
    return jsonwebtoken_1.default.sign({ data: userData }, secret, { expiresIn: expiration });
};
exports.signToken = signToken;
