import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './List/List';
import Edit from './Edit/Edit';
import Show from './Show/Show';
import New from './New/New';

function App({
  entries, entry, dateCond, errors,
}) {
  return (

    <div className="container">
      <header>
        <a href="/all-the-entries" className="title">Karaoke</a>
        <a href="/new-entry-form" className="signup button">Sign up to Karaoke</a>
      </header>

      <Routes>
        <Route path="/all-the-entries" element={<List entries={entries} />} />
        <Route path="/change-one-entry-form/:entryId" element={<Edit entry={entry} />} />
        <Route path="/display-one-entry/:entryId" element={<Show entry={entry} dateCond={dateCond} />} />
        {/* <Route path="/display-one-entry/:entryId" element={<Show entry={entry} />} /> */}
        <Route path="/new-entry-form" element={<New errors={errors} />} />
      </Routes>

      <footer>
        <span className="legal">Important Legal Information</span>
      </footer>
    </div>

  );
}

export default App;
