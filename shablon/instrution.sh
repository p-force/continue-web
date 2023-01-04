#!/bin/bash

npm init -y

#sed -i -e 's|"scripts": .*.|QWERTY|g' file.js 
#// /"scripts": \{([^\}])+\}/img
#package.json
#"scripts": {
#    "webpack": "webpack -wd eval-source-map",
#    "dev": "babel-node src/server.js"
#  },
# \Wscripts\W:\s{([^}])+},
# "scripts":\s{([^}])+},
# "scripts":\s\{([^\}])+\},
# \"scripts\":\s\{([^\}])+\},

npm i

npx gitignore node

echo '
# webpack
public/app.js
public/vendor.js

# sessions
sessions/

#env
.env
' >> .gitignore

touch envSample && echo 
'DB_NAME=
DB_USER=
DB_PASS=
PORT=' >> envSample

npm i -D @babel/node @babel/plugin-proposal-class-properties @babel/preset-react @babel/preset-env babel-loader morgan webpack webpack-cli @babel/core

touch .babelrc && echo '{
    "presets": [
      ["@babel/preset-env", { "targets": { "node": "current" } }],
      "@babel/preset-react"
    ],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}' >> .babelrc

touch webpack.config.js && echo "
const path = require('path');

const config = {
  entry: {
    app: ['./src/components/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    globalObject: 'this',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // имя чанк-файла
          test: /node_modules/, // test regular expression
        },
      },
    },
  },
};

module.exports = config;" >> webpack.config.js

npm i express react react-dom react-router-dom sequelize sequelize-cli pg pg-hstore

touch .sequelizerc && echo "const path = require('path');

module.exports = {
  'config': path.resolve('src', 'db', 'config', 'database.js'),
  'models-path': path.resolve('src', 'db', 'models'),
  'seeders-path': path.resolve('src', 'db', 'seeders'),
  'migrations-path': path.resolve('src', 'db', 'migrations')
};" >> .sequelizerc

npx sequelize-cli init

sed -i -e '1 s/^/require("dotenv").config();\nmodule.exports = /;' src/db/config/database.js && rm src/db/config/database.js-e

npm i dotenv express-session session-file-store bcrypt axios 

touch src/routes/indexRouter.js src/routes/apiRouter.js 

touch src/server.js && echo '
import express from "express";
import morgan from "morgan";
import session from "express-session";
import store from "session-file-store";
import indexRouter from "./routes/indexRouter";
import apiRouter from "./routes/apiRouter";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3002;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: "user_sid",                 // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? "test", // Секретное слово для шифрования, может быть любым
  resave: true,                 // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false,         // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true,                 // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use("/", indexRouter);
app.use("/api/v1", apiRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));' >> src/server.js

mkdir src/components/ && mkdir src/components/navbar && touch src/components/navbar/Navbar.jsx && echo '
export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
  );
}' >> src/components/navbar/Navbar.jsx

touch src/components/App.jsx && echo "import React from 'react'

export default function App() {
  return (
    <div>App</div>
  );
}" >> src/components/App.jsx

touch src/components/Layout.jsx && echo '
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="/app.js" />
        <script defer src="/vendor.js" />
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}' >> src/components/Layout.jsx

touch src/components/index.jsx && echo '
import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOMClient.hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App {...window.initState} />
  </BrowserRouter>,
);' >> src/components/index.jsx

mkdir src/routes/

mkdir src/middleware && touch src/middleware/layoutMW.js &&  echo '
import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "../components/Layout";

export default function layoutMW(req, res, next) {
  res.layout = (initState) => {
    const layoutComponent = React.createElement(Layout, { initState });
    const html = renderToString(layoutComponent);
    res.write("<!DOCTYPE html>");
    res.end(html);
  };
  next();
}' >> src/middleware/layoutMW.js

npx eslint --init

# npx sequelize-cli model:generate --name User --attributes name:string
# npx sequelize-cli db:migrate
# npx sequelize-cli seed:generate --name users
# npx sequelize-cli db:seed:all