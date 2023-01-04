import express from 'express';

// Фреймворк веб-приложений.
// Импорт маршрутов.
import morgan from 'morgan';

import indexRouter from './routes/index';
import entriesRouter from './routes/entries';
// HTTP request logger middleware for node.js.
// Логгирование деталей запросов.

const app = express();

const PORT = 3000;

// Тут должно быть подключение к БД (загляни в './db/connect')

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// Подключаем логгирование запросов
app.use(morgan('dev'));

// Подключаем статику
app.use(express.static('public'));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/', entriesRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
