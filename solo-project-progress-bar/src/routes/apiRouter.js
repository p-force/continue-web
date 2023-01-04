import express from 'express';
import { UserHr, CheckList } from '../db/models';

const router = express.Router();

router.get('/allCheckLists', async (req, res) => {
  const allLists = (await CheckList.findAll({ order: [['id', 'ASC']] }));
  res.json(allLists);
});

router.get('/:user/myCheckLists', async (req, res) => {
  const { user } = req.params;
  const oneUser = await UserHr.findOne({ where: { email: user } });
  const allLists = (await CheckList.findAll({ where: { author_id: oneUser.dataValues.id } }))
    .map((r) => r.dataValues);
  res.json(allLists);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await UserHr.destroy({ where: { id } });
  res.sendStatus(200);
});

router.route('/:uniqueUrl')
  .post(async (req, res) => {
    const { uniqueUrl } = req.params;
    await CheckList.update({ ...req.body }, { where: { uniqueUrl } });
    res.sendStatus(200);
  })
  .get(async (req, res) => {
    const { uniqueUrl } = req.params;
    const updatedList = await CheckList.findOne({ where: { uniqueUrl } });
    res.json(updatedList);
  });

router.route('/names/:uniqueUrl')
  .get(async (req, res) => {
    const { uniqueUrl } = req.params;
    const { tim1, tim2, tim3 } = req.body;
    const tims = await CheckList.findOne({ where: { uniqueUrl } });
    if (tim1 && tim2 && tim3) {
      await CheckList.update({ tim1, tim2, tim3 }, { where: { uniqueUrl } });
    }
    res.json(tims);
  })
  .post(async (req, res) => {
    const { uniqueUrl } = req.params;
    const { tim1, tim2, tim3 } = req.body;
    if (tim1 && tim2 && tim3) {
      await CheckList.update({ tim1, tim2, tim3 }, { where: { uniqueUrl } });
    }
    res.json(200);
  });

export default router;
