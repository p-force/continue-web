# Регистрация на Elbrus Party

## Общие сведения
Скоро намечается супер заводная вечеринка Elbrus Party с пиццей, настолками и специальным приглашённым гостем! У нас даже имеется форма регистрации на данное мероприятие, куда потенциальный участник может вписать информацию о себе. Но, к сожалению, мы не подключили данную форму к серверу и пока не собираем никакие данные.

Твоя задача -- настроить отправку формы, принять её на backend и добавить запись в базу данных!

Когда создаете приложение, помните, каким образом происходит обмен данными между клиентом и сервером. Браузер будет отправлять данные через HTTP-запросы в Express. После того, как сервер получит данные от пользователя, маршрутизатор обработки запросов должен выполнить редирект на изначальную страницу.

Постарайтесь выполнить всё упражнение за 30 минут.

## Releases
### Пре-релиз: Установка Модулей
Убедитесь, что модули, необходимые для приложения, были установлены. В командной строке запустите `npm install`. Ознакомься с файлами проекта и попробуй всё запустить командой: `npm run dev`.

### Release 0: Отправка формы на нужный endpoint
Перейди в компонент `<Form />` и ознакомься с ним. Сейчас при нажатии на кнопку регистрации форма отправляет `GET` запрос,
отправляя данные через query-параметры. Это происходит потому, что, если не указан `method` и `action`, то стандартное поведение формы при submit - это отправка методом `GET` на текущий адрес. Нужно это исправить: добавь метод `POST` и указажи адрес запроса (`action`). В файле `server.js` добавь соответствующий endpoint и убедись, что данные формы приходят в `req.body`.


### Release 1: Запись формы в базу данных
Создай новую базу данных и укажи необходимые данные в файле `/src/db/config/database.json`. Модель `Entry` уже создана за тебя, поэтому можешь сразу накатить миграцию через [sequelize-cli](https://sequelize.org/master/manual/migrations.html) и подготовить БД к работе.


Ты же уже справился с предыдущим релизом? В том самом endpoint обратись к модели `Entry` и создай новую запись в базе данных с помощью метода [create](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/). Будь внимателен: некоторые атрибуты name не совпадают со столбцами в базе данных. Убедись, что добавление произошло.


### Release 2: Extra
В нашей форме есть что улучшать: например, пропиши атрибуты name таким образом, чтобы они совпадали со столбцами из базы данных. Перепиши метод `.create`.


Помнишь, изначально форма отправляла данные `GET` запросом? Можешь попробовать принять данные и таким способом.


## Заключение
Это небольшое упражнение демонстрирует самую простую форму общения frontend и backend, а также позволяет вспомнить методы общения с базой данной. Переходи дальше!