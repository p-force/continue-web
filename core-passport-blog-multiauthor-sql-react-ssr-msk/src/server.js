import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';
import entriesRouter from './routes/entries';
import apiRouter from './routes/api';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/entries', entriesRouter);
app.use('/api/v1/', apiRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
