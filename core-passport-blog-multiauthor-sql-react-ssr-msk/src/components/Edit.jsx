import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit({ entry }) {
  const { id } = useParams();
  const [oneEntry, setOneEntry] = useState(entry || null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/v1/entries/${id}`)
      .then((res) => res.json())
      .then((data) => setOneEntry(data));
  }, []);

  const changeEntry = (e) => {
    setOneEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editEntry = (e) => {
    e.preventDefault();
    fetch(`/api/v1/entries/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(oneEntry),
    })
      .then(() => navigate('/'));
  };

  return (
    <>
      {oneEntry

        ? (
          <div>
            <h1>Revise your thoughts on broccoli ...</h1>

            <form onSubmit={editEntry} id="editEntryForm">
              <label htmlFor="title-input" className="block mar-b-1">Title:</label>
              <input
                id="title-input"
                name="title"
                type="text"
                value={oneEntry.title || ''}
                onChange={changeEntry}
                className="block w-100 no-outline no-border pad-1 mar-b-2"
              />

              <label htmlFor="body-textarea" className="block mar-b-1">Body:</label>
              <textarea
                id="body-textarea"
                name="body"
                value={oneEntry.body || ''}
                onChange={changeEntry}
                className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2"
              />

              <input
                type="submit"
                value="Update"
                onChange={changeEntry}
                className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
              />
            </form>
          </div>
        )
        : <h2>Loading</h2>}
    </>
  );
}

export default Edit;
