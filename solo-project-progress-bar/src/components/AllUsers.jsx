import React, { useEffect, useState } from 'react';
import CardOneUser from './CardOneUser';

export default function AllUsers({ allUsersGG }) {
  const [usersGGArray, setusersGGArray] = useState([]);
  useEffect(() => {
    fetch('/api/v1/allUsers')
      .then((res) => res.json())
      .then((data) => setusersGGArray(data));
  }, []);

  const submitHandlerAdd = (e) => {
    e.preventDefault();
    fetch('/api/v1/', {

    });
  };
  return (
    <>
      <div className="row">
        {usersGGArray && usersGGArray?.map((el) => (
          <CardOneUser key={el.id} el={el} />
        ))}
      </div>
      <div className="row">
        <button type="button" onClick={submitHandlerAdd} style={{ marginTop: '30px' }}>Добавить пользователя</button>
      </div>
    </>
  );
}
