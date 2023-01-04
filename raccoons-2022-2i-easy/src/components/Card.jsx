import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ el, setCardUpdate }) {
  console.log(el)
  const [done, setDone] = useState(0);
  console.log(el);
  const clickHandlerPush = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/v1/push', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    });
  };

  const clickHandlerDel = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/v1/del', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    });
    if (res.ok) setDone(1);
  };
  return (
    <div className="card col-5 mt-5" style={{ width: '18rem' }}>
      <img src="https://ruju.ru/upload/resize_cache/webp/upload/iblock/fbf/fbfb25cc8eafb0b3cd4074152d5402ef.webp" className="card-img-top" style={{ width: '150px' }} />
      <div className="card-body">
        <h5 className="card-title">{el.name}</h5>
        <p className="card-text">{el.email}</p>
        <p className="card-text">{el.phone}</p>

        <div>
          <button type="button" className="btn btn-success" onClick={clickHandlerPush}>Принять</button>
        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={clickHandlerDel}>Отклонить</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
