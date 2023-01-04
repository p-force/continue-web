import express from 'express';
import { Card } from '../db/models';

const router = express.Router();

router.get('/newEmploee', async (req, res) => {

});
router.get('/all', async (req, res) => {
  const cards = (await Card.findAll({ where: { isEmployee: true } })).map((el) => el.dataValues);
  const have = (cards.filter((el) => el.isEmployee === true)).length;
  const havent = (cards.filter((el) => el.isEmployee === false)).length;
  res.json({ have, havent, cards });
});
router.get('/cards', async (req, res) => {
  const cards = (await Card.findAll({ order: [['id', 'ASC']] })).map((el) => el.dataValues);
  const have = (cards.filter((el) => el.isEmployee === true)).length;
  const havent = (cards.filter((el) => el.isEmployee === false)).length;
  res.json({ have, havent, cards });
});

router.delete('/del', async (req, res) => {
  const { id } = req.body;
  console.log('DEL ID _____________', id);
  await Card.drop({ where: { id } });
  res.sendStatus(200);
});

router.patch('/push', async (req, res) => {
  const { id } = req.body;
  await Card.update({ isEmployee: true }, { where: { id } });
  res.sendStatus(200);
});

export default router;
