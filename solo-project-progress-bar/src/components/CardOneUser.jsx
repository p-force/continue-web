import React, { useState } from 'react';

export default function CardOneUser({ el }) {
  const [pass, setPass] = useState(el.passwd || '');
  const [status, setStatus] = useState('');

  // need to fix!!!!
  const submitHandlerDelete = (e) => {
    e.preventDefault();
    fetch('/api/v1/allUsers/:id', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el.id),
    });
  };

  const changeHandler = (e) => {
    setPass(e.target.value);
  };

  const changeHandlerStatus = (e) => {
    setStatus(e.target.value);
  };

  const submitHandlerSave = (e) => {
    e.preventDefault();
    fetch('/api/v1/allUsers/changePass', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ pass, userId: el.id }),
    });
  };

  const submitHandlerStatus = (e) => {
    e.preventDefault();
    fetch('/api/v1/allUsers/changeStatus', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ status, userId: el.id }),
    });
  };

  return (
    <div key={el.id} className="col-4 mt-5">
      <div className="card" style={{ backgroundColor: '#f0fff0', color: '#0f141e' }}>
        <div className="card-body">
          <h5 className="card-title redText">
            Имя:
            {' '}
            {el?.firstName}
          </h5>
          <p className="card-text">
            Фамилия:
            {' '}
            {el.lastName}
          </p>
          <p className="card-text">
            {' '}
            Почта:
            {' '}
            {el.email}
          </p>
          <p className="card-text">
            {' '}
            Пароль:
            {' '}
            <input name="pass" value={pass} onChange={changeHandler} />
            <button type="button" className="btn btn-outline-success" onClick={submitHandlerSave}>изменить</button>
          </p>
          <p className="card-text">
            {' '}
            Статус:
            {' '}
            <input name="status" value={status} onChange={changeHandlerStatus} />
            <button type="button" className="btn btn-outline-success" onClick={submitHandlerStatus}>изменить</button>
            {(el.admin === true) ? (<span style={{ color: 'darkred' }}>admin</span>) : (<span style={{ color: 'green' }}>пользователь</span>)}
          </p>
          <button type="button" onClick={submitHandlerDelete} style={{ marginTop: '30px' }}> Удалить пользователя </button>
        </div>
      </div>
    </div>

  );
}
