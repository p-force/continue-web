import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => res.redirect('/all-the-entries'));

export default router;
