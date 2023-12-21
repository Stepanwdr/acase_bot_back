import jwt from 'jsonwebtoken';
import HttpError from 'http-errors';

const { JWT_SECRET } = process.env;

const EXCLUDE = [
  'POST:/users/login',
  'POST:/users/register',
  'POST:/clinic/clinic_register',
  'GET:/users',
  'POST:/users/create',
  'GET:/',
];

export default function (req, res, next) {
  try {
    const { originalUrl, method } = req;
    if (method === 'OPTIONS' || EXCLUDE.includes(`${method}:${originalUrl}`)) {
      next();
      return;
    }
    const { authorization = '' } = req.headers;
    const token = authorization.replace(/^Bearer /, '');
    let userId;
    try {
      const data = jwt.verify(token, JWT_SECRET);
      userId = data.userId;
    } catch (e) {
      //
    }
    if (!userId) {
      throw HttpError(401);
    }
    req.userId = userId;
    next();
  } catch (e) {
    next(e);
  }
}
