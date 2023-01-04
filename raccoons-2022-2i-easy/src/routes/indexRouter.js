import express from 'express';
import { Card } from '../db/models';

// const randomProfile = require('random-profile-generator');

const router = express.Router();

router.get('/', async (req, res) => {
  const cards = (await Card.findAll({ order: [['id', 'ASC']] })).map((el) => el.dataValues);
  console.log(req.session.userSession?.userId);
  res.layout({
    path: req.originalUrl,
    userName: req.session.userSession?.email,
    userId: req.session.userSession?.userId,
    cards,
  });
});
router.get('/all', async (req, res) => {
  const cards = (await Card.findAll({ where: { isEmployee: true } })).map((el) => el.dataValues);
  // console.log(req.session.userSession?.userId);
  res.layout({
    path: req.originalUrl,
    userName: req.session.userSession?.email,
    userId: req.session.userSession?.userId,
    cards,
  });
});
// router.get('/phones', (req, res) => {
//   res.layout({ path: req.originalUrl });
// });

router.get('/login', (req, res) => {
  res.layout({ path: req.originalUrl, userName: req.session.userSession?.email });
});

router.get('/signup', (req, res) => {
  res.layout({ path: req.originalUrl, userName: req.session.userSession?.email });
});

export default router;
