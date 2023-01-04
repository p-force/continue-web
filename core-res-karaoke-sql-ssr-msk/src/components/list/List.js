import React from 'react';

function List({ entries }) {
  return (
    <div>
      <h1>Upcoming Karaoke Artists</h1>

      <main>
        <ul className="entries">
          {entries.length && entries.map((entry) => (
            <li key={entry.id} className="entry">
              <span className="singer">{entry.singer}</span>
              <span className="song-title">{entry.songTitle}</span>
              <ul className="entry-links">
                <li className="entry-link"><a href={`/display-one-entry/${entry.id}`}>details</a></li>
                <li className="entry-link"><a href={`/change-one-entry-form/${entry.id}`}>edit</a></li>
                <li className="entry-link"><a href={`/removal-entry/${entry.id}`}>delete</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
}

export default List;
