import React from 'react';

export default function Box({ el }) {
  return (
    <div className="example-box">
      <a href="/">/5/math</a>
      <div className="api-result scroll" style={{ overflow: 'auto' }}>
        <p>{el}</p>
      </div>
    </div>
  );
}
