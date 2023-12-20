import './App.css';
import Header from './components/scripts/Header';
import HomePage from './components/scripts/HomePage';
import Contact from './components/scripts/Contact';
import About from './components/scripts/About';
import React, { useState } from 'react';
import Store from './components/scripts/Store';
import OrderDetail from './components/scripts/OrderDetail';

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
      {currentPage === 'OrderDetail' && <OrderDetail/>}
    </div>
  );
};

export default App;
