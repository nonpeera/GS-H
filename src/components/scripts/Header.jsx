import React from 'react';
import '../styles/Header.css';
import AuthDetails from '../auth/AuthDetails';
const Header = ({ currentPage, changePage }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-item" onClick={() => changePage("Home")}>
          Home
        </div>
        <div className="nav-item" onClick={() => changePage('Store')}>
          Store
        </div>
        <div className="nav-item" onClick={() => changePage('AboutUs')}>
          About Us
        </div>
        <div className="nav-item" onClick={() => changePage("Contact")}>
          Contract
        </div>
      </div>
      <div className="nav-right">
        <div><AuthDetails/></div>
        <div className="nav-item" onClick={() => changePage('Login')}>
          Login
        </div>
      </div>
    </nav>
  );
};

export default Header;