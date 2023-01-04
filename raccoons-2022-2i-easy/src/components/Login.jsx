import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser, setId }) {
  const navigate = useNavigate();
  const [err, setError] = useState('');
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v2/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.status === 401) {
      setError('Вы ввели неверный email или password');
    } else {
      const data = await response.json();
      setUser(data.name);
      setId(data.userId);
      navigate('/');
    }
  };
  return (
    <form className="container text-center" onSubmit={submitHandler}>
      <div className="mb-3">
        <h1>Login page</h1>
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
      {err && <div>{err}</div>}
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}
