import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { Link } from './db/models';

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

function makeid() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 9; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

app.get('/', async (req, res) => {
  // Отображает список коротких 'Url'
  const db = await Link.findAll();
  const initState = { title: 'Url shortener', path: req.originalUrl, db };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get('/urls/:param', async (req, res) => {
  try {
    const { param } = req.params;
    const db = await Link.findOne({ where: { code: param } });
    res.redirect(db.url);
  } catch (err) { console.log(err.message); res.redirect('/'); }
});

app.post('/urls', async (req, res) => {
  try {
    const { urlLong } = req.body;
    if (!(await Link.findOne({ where: { url: urlLong } })) && urlLong) {
      const randUrl = makeid();
      await Link.create({ url: urlLong, code: randUrl });
    }
    res.redirect('/');
  } catch (err) {
    console.log(err.message); res.redirect('/');
  }
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
