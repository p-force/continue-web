import React from 'react';

export default function Url() {
  return (
    <form className="d-flex" style={{ height: '70px', marginBlockEnd: '50px' }} method="POST" action="/urls">
      <div className="container">
        <input name="urlLong" className="form-control me-4" type="form-text" placeholder="input url" style={{ width: '800px', marginTop: '30px' }} />
        <button className="btn btn-dark me-4" type="submit" style={{ width: '124px', marginTop: '30px' }}>Send url</button>
      </div>
    </form>
  );
}
