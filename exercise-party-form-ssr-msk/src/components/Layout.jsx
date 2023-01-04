import React from 'react';
import App from './App';

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <link rel="icon" href="/img/icon-48x48.png" />
        <link rel="stylesheet" href="/css/main.css" />
        <title>Elbrus Party</title>
      </head>
      <body>
        <div id="root">
            <App {...initState} />
        </div>
      </body>
    </html>
  );
}
