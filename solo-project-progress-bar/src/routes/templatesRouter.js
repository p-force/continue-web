import express from 'express';
import { CheckList, UserHr } from '../db/models';

const router = express.Router();

router.get('/all', async (req, res) => {
  const lists = await CheckList.findAll({ order: [['id', 'DESC']] });
  const initState = {
    path: req.originalUrl,
    lists,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
  };
  res.layout(initState);
});

router.get('/my', async (req, res) => {
  const user = await UserHr.findOne({ where: { email: req.session.userEmail } });
  const lists = (await CheckList.findAll({ where: { author_id: user.dataValues.id } }));
  const initState = {
    path: req.originalUrl,
    lists,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
  };
  res.layout(initState);
});

export default router;
