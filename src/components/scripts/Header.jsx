import React, { useState } from 'react';

const Header = () => {
  const [language, setLanguage] = useState('en'); // Default language is English
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'th' : 'en'));
  };

  const handleLogin = () => {
    setLoggedIn(true); // You would typically implement proper authentication logic here
  };

  return (
    <header style={{ background: 'white', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <a href="/">Home</a>
          <a href="/store">Store</a>
          <a href="/about">About Me</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div>
          <span style={{ marginRight: '10px' }}>Language: {language.toUpperCase()}</span>
          <button onClick={toggleLanguage}>Toggle Language</button>
        </div>

        <div>
          {isLoggedIn ? (
            <span>Welcome, User! (Add logout functionality)</span>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
