import express from 'express';
import { generateRandomString } from 'generate-strings';
import { CheckList } from '../db/models';

const router = express.Router();
router.route('/new')
  .get(async (req, res) => {
    const initState = {
      path: req.originalUrl,
      userName: req.session.userSession?.email,
      admin: req.session.userSession?.isAdmin,
    };
    res.layout(initState);
  })
  .post(async (req, res) => {
    try {
      const { userName, menthorName } = req.body;
      const [newEmployee, created] = await CheckList.findOrCreate({
        where: { userName },
        defaults: {
          userName,
          menthorName,
          author_id: res.locals.userId,
          uniqueUrl: generateRandomString(),
        },
      });
      if (created && newEmployee.userName !== '' && newEmployee.menthorName !== '') {
        res.json(newEmployee);
      } else {
        res.sendStatus(406);
      }
    } catch (error) {
      res.sendStatus(404);
    }
  });

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const newEmployee = await CheckList.findByPk(id);
  const initState = {
    path: req.originalUrl,
    newEmployee,
    userName: req.session.userSession?.email,
    admin: req.session.userSession?.isAdmin,
  };
  res.layout(initState);
});

export default router;
