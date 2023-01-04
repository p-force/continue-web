import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [stat, setStat] = useState('');
  const [inputs, setInputs] = useState({ firstName: '', email: '', password: '' });
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v2/user/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.status === 208) { setStat('Вы уже зарегистрированы'); } else {
      setStat('');
      navigate('/login');
    }
  };
  return (
    <form className="container text-center" onSubmit={submitHandler}>
      <div className="mb-3">
        <h1>Registration page</h1>
        <div className="mb-3">
          <label htmlFor="Input" className="form-label">
            Name
            <input
              type="text"
              name="firstName"
              value={inputs.firstName}
              onChange={changeHandler}
              className="form-control"
            />
          </label>
        </div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
            className="form-control"
            id="exampleInputPassword1"
          />
        </label>
      </div>
      {stat && <div>{stat}</div>}
      <button type="submit" className="btn btn-primary">SignUp</button>
    </form>
  );
}
