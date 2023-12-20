import './App.css';
import Header from './components/scripts/Header';
import HomePage from './components/scripts/HomePage';
import Contact from './components/scripts/Contact';
import About from './components/scripts/About';
import React, { useState } from 'react';
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'AboutUs' && <About />}
    </div>
  );
};

export default App;
