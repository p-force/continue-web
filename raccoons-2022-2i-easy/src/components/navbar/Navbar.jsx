import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar({
  user, setUser, userName, userEmail,
}) {
  console.log(userEmail);
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v2/user/logout');
    if (response.ok) {
      setUser(null); // добавить
      navigate('/');
    }
  };
  const newEmpHandler = async (e) => {
    e.preventDefault();
    await fetch('/api/v1/newEmploee');
  };
  useEffect(() => {
  }, [user]);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Hr Helper 3000</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex">
            {user
              && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/all">Принятые</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Приглашенные</Link>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn btn-secondary" onClick={newEmpHandler}>Пригласить на собеседование</button>
                  </li>
                  <li className="nav-item">
                    Hi,
                    {' '}
                    {user}
                  </li>
                </>
              )}
            {!user
              ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">LogIn</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">SignUp</Link>
                  </li>
                </>
              )
              : (
                <li className="nav-item">
                  <button type="button" className="btn btn-secondary" onClick={logoutHandler}>Logout</button>
                </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
