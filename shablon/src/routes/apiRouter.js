import express from 'express';
import { User } from '../db/models';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  req.session.user = { email, password };
  console.log('=========body', req.body);
  const find = await User.findOne({ where: { login: email } });
  console.log('*****************', password, find.password);
  if (find) {
    if (find.password === password) { res.sendStatus(200); }
  }
  res.sendStatus(401);
});

export default router;
