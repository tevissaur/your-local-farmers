import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';
require('dotenv').config()

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
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
}
const signToken = (userData: IUser) => {
  return jwt.sign({ data: userData }, secret, { expiresIn: expiration });
}
export {
  authMiddleware,
  signToken 
};
