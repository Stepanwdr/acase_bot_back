import HttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import { Users } from '../models';
import validate from '../services/validate';

const { JWT_SECRET } = process.env;
class UsersController {
    static register = async (req, res, next) => {
      try {
        const {
          clinicId, name, lname, fname,
          email, password, address, phone, birthDate, role, speciality, gender,
        } = req.body;
        validate(req.body, {
          name: 'required|alpha',
          email: 'required|email',
          clinicId: 'required|string',
        }).throw();
        const existUser = await Users.findOne({
          where: {
            $or: [
              { email },
              { phone },
            ],
          },
        });
        if (existUser) {
          const errors = {};
          if (existUser.email === email) {
            errors.email = ['Email must be unique'];
          }
          if (existUser.phone === phone) {
            errors.phone = ['Email must be unique'];
          }
          throw HttpError(422, { errors });
        }
        const user = await Users.create({
          clinicId,
          name,
          lname,
          fname,
          email,
          password,
          address,
          phone,
          birthDate,
          role,
          speciality,
          gender,
        });
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({
          status: 'ok',
          token,
        });
      } catch (e) {
        next(e);
      }
    }

    static login = async (req, res, next) => {
      try {
        validate(req.body, {
          email: 'required|email',
          password: 'required',
        }).throw();
        const { email, password } = req.body;
        const user = await Users.findOne({
          where: { email },
        });
        if (!user || user.getDataValue('password') !== Users.passwordHash(password)) {
          throw HttpError(422, 'Such user does not exist');
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({
          status: 'ok',
          user,
          token,
        });
      } catch (e) {
        res.json({
          status: 'ok',

        });
        next(e);
      }
    }

    static createUser=async (req, res, next) => {
      try {
        const {
          // eslint-disable-next-line camelcase
          username, first_name, last_name, chat_id, join_date,
        } = req.body;
        console.log(req.body, 'sd');
        const user = await Users.create({
          username, first_name, last_name, chat_id, join_date,
        });
        res.json({
          status: 'ok',
          user,
        });
      } catch (e) {
        next(e);
      }
    }

    static getUsers=async (req, res, next) => {
      try {
        const users = await Users.findAll({
          where: {},
        });
        res.json({
          status: 'ok',
          users,
        });
        console.log(users);
      } catch (e) {
        next(e);
      }
    }
}
export default UsersController;
