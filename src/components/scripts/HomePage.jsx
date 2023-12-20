import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    return (
      <div className="container">
        <div className="left-section">
            <form1>
              <h1>GROWNSEED</h1>
              <h1>@HOME</h1>
              <h6>We sell and deliver plants worldwide.</h6>           
            </form1>
            <div className='navigation-button'>Contact Us</div>
        </div>
        <div className="right-section">
          {/* Content for the right section */}
          {/* Consider adding images, additional information, or functionality here */}
        </div>
      </div>
    );
  }
  
export default HomePage;
