import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
      <div className="max-w-700 center wrap-float">
        <nav className="clearfix mar-b-1">
          <ul className="no-bullets no-margin no-padding right">
            <li className="pipe-separate t-light-green left"><Link to="/">home</Link></li>
          </ul>
        </nav>

        <div className="logo-container">
          <img src="/images/logo.png" alt="brokk" className="center block logo" />
          <h1>Broccoli Blog</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
