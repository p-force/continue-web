import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.layout({ path: req.originalUrl });
});
router.get('/phones', (req, res) => {
  res.layout({ path: req.originalUrl });
});

router.get('/login', (req, res) => {
  res.layout({ path: req.originalUrl });
});

router.get('/signup', (req, res) => {
  res.layout({ path: req.originalUrl });
});

export default router;
