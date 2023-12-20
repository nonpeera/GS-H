import React, { useState } from 'react';
import '../styles/Store.css';

const Store = () => {
    return (
      <div className='.container'>
        {/* Sidebar Menu */}
        <nav className="sidebar">
          <h2>สินค้าทั้งหมด</h2>
          <ul>
            <li><a href="#">ฟิโลเดนดรอน</a></li>
            <li><a href="#">ซิงโกเนียม</a></li>
            <li><a href="#">อโลคาเซีย</a></li>
            <li><a href="#">มอนสเตอร่า</a></li>
            <li><a href="#">แอนธูเรี่ยม</a></li>
            <li><a href="#">ซินแดปซัส</a></li>
            <li><a href="#">ไพเพอร์</a></li>
            <li><a href="#">อมีเดียม</a></li>
            <li><a href="#">สปาทิฟิลลั่ม</a></li>
            <li><a href="#">อะกลาโอเนม่า</a></li>
          </ul>
        </nav>
        {/* Main Content */}
        <article className='content'>
          <h1>Welcome</h1>
        </article>
      </div>
    )
}

export default Store;