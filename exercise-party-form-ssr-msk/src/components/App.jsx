import React from 'react';
import Form from './Form';

export default function App() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div className="card card-5">
          <div className="card-heading">
            <h2 className="title">Регистрация на ELBRUS PARTY</h2>
          </div>
          <div className="card-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
