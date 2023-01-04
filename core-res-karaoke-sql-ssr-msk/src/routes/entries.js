import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Entry } from '../db/models';
import Layout from '../components/Layout';

const entriesRouter = express.Router();

entriesRouter.get('/all-the-entries', async (req, res) => {
  const entries = await Entry.findAll();
  const initState = { path: req.originalUrl, entries };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

entriesRouter.get('/new-entry-form', async (req, res) => {
  const initState = { path: req.originalUrl, errors: [req.query] };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

entriesRouter.post('/creation-new-post-post', async (req, res) => {
  const entry = await Entry.create(req.body);
  try {
    await entry.save();
    // throw Error('You shall not pass');
    return res.redirect(`display-one-entry/${entry.id}`);
  } catch (err) {
    const error = new URLSearchParams();
    error.append('error', err.message);
    return res.redirect(`/new-entry-form/?${error}`);
  }
});

entriesRouter.get('/display-one-entry/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const dateCond = (entry.createdAt === entry.updatedAt);
  const initState = { path: req.originalUrl, entry, dateCond };

  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

entriesRouter.get('/change-one-entry-form/:id', async (req, res) => {
  const entry = await Entry.findByPk(req.params.id);
  const initState = { path: req.originalUrl, entry };

  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

entriesRouter.patch('/change/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const { singer, songTitle } = req.body;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  res.sendStatus(200);
  // return res.redirect(`/display-one-entry/${entry.id}`);
});

entriesRouter.delete('/removal-entry/:id', async (req, res) => {
  await Entry.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
  // return res.redirect('/all-the-entries');
});

export default entriesRouter;
