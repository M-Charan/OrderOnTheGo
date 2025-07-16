// File: src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import this
import Header from '../components/Header';
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // ✅ define it here

  return (
    <>
      <Header />
      <div className="login-container">
        <form className="login-box">
          <h2>Login</h2>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="register-link">
            Not Registered?{' '}
            <button
              type="button"
              className="link-button"
              onClick={() => navigate('/register')} // ✅ this now works
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
