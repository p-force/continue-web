import React from 'react';
import Url from './Url';
import AllLinks from './AllLinks';
import Navbar from './Navbar';
import MainPage from './MainPage';

function App({ title, db }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <MainPage links={db} />
      </div>
    </>
  );
}

export default App;
