// File: src/pages/Register.jsx
import React from 'react';
import Header from '../components/Header';
import './Register.css';
import { useNavigate } from 'react-router-dom'; // ✅ already imported

const Register = () => {
  const navigate = useNavigate(); // ✅ define navigate function

  return (
    <>
      <Header />
      <div className="register-container">
        <form className="register-box">
          <h2>Register</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
          <p className="login-link">
            Already registered?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="link-button"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
