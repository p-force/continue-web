import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function New() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHAndler = (e) => {
    e.preventDefault();
    fetch('/api/v1/entries', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(navigate('/'));
  };

  return (
    <>
      <h1>Let broccoli be your muse ...</h1>

      <form method="post" onSubmit={submitHAndler}>
        <label htmlFor="title-input" className="block mar-b-1">Title:</label>
        <input
          id="title-input"
          onChange={inputHandler}
          value={data.title || ''}
          name="title"
          type="text"
          className="block w-100 no-outline no-border pad-1 mar-b-2"
        />

        <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
        <textarea
          onChange={inputHandler}
          value={data.body || ''}
          id="body-textarea"
          name="body"
          className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
        />

        <input
          onChange={inputHandler}
          type="submit"
          value="Publish"
          className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
        />
      </form>
    </>
  );
}
