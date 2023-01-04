import express from 'express';
import { UserHr } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const usersGG = await UserHr.findAll({ order: [['id', 'ASC']] });
  res.json(usersGG);
});

router.post('/changePass', async (req, res) => {
  const { pass, userId } = req.body;
  await UserHr.update({ passwd: pass }, { where: { id: userId } });
  res.sendStatus(200);
});

router.post('/changeStatus', async (req, res) => {
  const { status, userId } = req.body;
  await UserHr.update({ admin: !!((status === 'admin' || status === 'админ')) }, { where: { id: userId } });
  res.sendStatus(200);
});

export default router;
