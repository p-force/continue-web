import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function Show({ entry }) {
  const [oneEntry, setOneEntry] = useState(entry || null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!oneEntry) {
      fetch(`/api/v1/entries/${id}`)
        .then((res) => res.json())
        .then((data) => setOneEntry(data));
    }
  }, []);

  const deleteHandler = () => {
    fetch(`/api/v1/entries/${id}`, { method: 'delete' })
      .then(() => navigate('/'));
  };

  return (
    <div>
      {oneEntry
        ? (
          <>
            <h1>{oneEntry.title}</h1>

            <p>{oneEntry.body}</p>

            <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
              <li className="pipe-separate left">
                <Link to={`/entries/${oneEntry.id}/edit`} className="c-white">edit</Link>
              </li>

              <li className="pipe-separate left">
                <button
                  id="deleteEntryButton"
                  type="button"
                  data-entryid={oneEntry.id}
                  value="delete"
                  className="no-border no-outline no-bg c-white hover-underline"
                  onClick={deleteHandler}
                >
                  delete

                </button>
              </li>
            </ul>
          </>
        )
        : <h2> Loading </h2>}
    </div>
  );
}
