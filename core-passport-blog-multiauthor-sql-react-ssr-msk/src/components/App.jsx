import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Edit from './Edit';
import Entries from './Entries';
import Header from './Header';
import New from './New';
import Show from './Show';

const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.append('text', 'Susan go to the store everyday');
encodedParams.append('language', 'en-US');

function App({ entries, entry }) {
  const options = {
    method: 'POST',
    url: 'https://grammarbot.p.rapidapi.com/check',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '2d237813a9msh91a38f7b3ceafe4p182de0jsn6f0beeb7c85d',
      'X-RapidAPI-Host': 'grammarbot.p.rapidapi.com',
    },
    data: encodedParams,
  };

  axios.request(options).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.error(error);
  });
  return (
    <>
      <Header />
      <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
        <div className="max-w-700 center">
          <Routes>
            <Route path="/" element={<Entries entries={entries} />} />
            <Route path="entries/:id" element={<Show entry={entry} />} />
            <Route path="entries/new" element={<New />} />
            <Route path="entries/:id/edit" element={<Edit entry={entry} />} />
          </Routes>
        </div>

      </div>
    </>

  );
}

export default App;
