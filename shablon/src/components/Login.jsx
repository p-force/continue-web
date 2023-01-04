import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('------------fetch');
    const response = await fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    console.log('++++++++++response');
    if (response.ok) { navigate('/'); } else {
      setError('Вы ввели неверный email или password');
    }
  };
  return (
    <form className="container" onSubmit={submitHandler}>
      <div className="mb-3">
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
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}
