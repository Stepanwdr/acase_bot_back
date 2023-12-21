import express from 'express';
import users from './users';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express Stepan' });
});
router.use('/users', users);

export default router;
