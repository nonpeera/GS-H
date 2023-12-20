// Header.jsx

import React, { useState } from 'react';
import '../styles/Header.css'; // Import the styles

const Header = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-item" onClick={() => changePage('Home')}>
          Home
        </div>
        <div className="nav-item" onClick={() => changePage('Store')}>
          Store
        </div>
        <div className="nav-item" onClick={() => changePage('AboutUs')}>
          About Us
        </div>
        <div className="nav-item" onClick={() => changePage('Contract')}>
          Contract
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-item" onClick={() => changePage('Login')}>
          Login
        </div>
      </div>
      <p>Current Page: {currentPage}</p>
    </nav>
  );
};

export default Header;
