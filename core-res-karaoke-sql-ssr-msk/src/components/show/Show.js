import React from 'react';

function Show({ entry, dateCond }) {
  return (
    <div>
      <h1>Entry Details</h1>

      <main className="content-wrapper">
        <p>
          {`${entry.singer}  signed up to sing ${entry.songTitle}.` }
        </p>

        <p>
          {`Entry submitted on ${entry.createdAt}.`}
        </p>

        {!dateCond && (
          <p>
            {`Entry updated on ${entry.updatedAt}.`}
          </p>
        )}

      </main>
    </div>
  );
}

export default Show;
