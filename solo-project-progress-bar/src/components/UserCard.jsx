import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCard(usersGG) {
  return (
    <div className="col-4 mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title redText">{usersGG.firstName}</h5>
          <p className="card-text">{usersGG.lastName}</p>
          <p className="card-text">{usersGG.email}</p>
        </div>
      </div>
    </div>

  );
}
