import { Router } from 'express';
import { CheckList } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const lists = await CheckList.findAll({ order: [['id', 'DESC']] });
  res.json(lists);
});

export default router;
