import express from 'express';
import { User } from '../db/models';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email: email[0] } });
  if (password[0] === currUser.password) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    req.session.userFirstName = currUser.name;
    req.session.userSession = { email: currUser.email, name: currUser.name };
    res.json({ email: currUser.email, userId: currUser.id, name: currUser.name });
  } else {
    res.sendStatus(401);
  }
});

router.post('/signup', async (req, res) => {
  const { email, password, firstName } = req.body;
  console.log(email, password, firstName);
  const [user, created] = await User.findOrCreate({
    where: { email: email[0] },
    defaults: {
      name: firstName[0],
      password: password[0],
      email: email[0],
    },
  });
  if (created) { res.sendStatus(201); } else { res.sendStatus(208); }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default router;
