// File: src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // ✅ create navigate function

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src="/images/logo1.png" alt="Logo" />
        <span>
          Order<span className="red">OnTheGo</span>
        </span>
      </div>
      <input className="search" type="text" placeholder="Search Restaurants, Cuisines etc" />
      <button className="login-btn" onClick={() => navigate('/login')}>
        Login
      </button>
      <button className="login-btn" onClick={() => navigate('/register')}>
       Register
      </button>
    </header>
  );
};

export default Header;
