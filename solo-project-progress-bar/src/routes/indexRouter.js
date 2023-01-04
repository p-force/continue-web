import express from 'express';
import { CheckList, UserHr } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

router.get('/allUsers', async (req, res) => {
  const usersGG = (await UserHr.findAll({ order: [['id', 'ASC']] })).map((el) => el.dataValues);
  const initState = {
    path: req.originalUrl,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
    usersGG,
  };
  res.layout(initState);
});

router.get('/checklists/:id', async (req, res) => {
  const { id } = req.params;
  const list = await CheckList.findByPk(id);
  const initState = {
    path: req.originalUrl,
    list,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
  };
  res.layout(initState);
});

router.get('/:uniqueUrl', async (req, res) => {
  const { uniqueUrl } = req.params;
  const list = await CheckList.findOne({ where: { uniqueUrl } });
  const initState = {
    path: req.originalUrl,
    list,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
  };
  res.layout(initState);
});

export default router;
