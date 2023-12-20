import './App.css';
import Header from './components/scripts/Header';
import HomePage from './components/scripts/HomePage';
import Contact from './components/scripts/Contact';
import About from './components/scripts/About';
import React, { useState } from 'react';
<<<<<<< HEAD
import SignIn from './components/auth/SignIn';
=======
import Store from './components/scripts/Store';
>>>>>>> 46a122a51b9329b6936a9e3b4fab86f0625488f6
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'Store' && <Store />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'AboutUs' && <About />}
      {currentPage === 'Login' && <SignIn />}
    </div>
  );
};

export default App;
