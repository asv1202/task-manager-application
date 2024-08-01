// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <header className="signup-header">
        <div className="logo">
          <i className="fas fa-calendar"></i>
        </div>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button active">Signup</button>
          </Link>
        </div>
      </header>
      <div className="signup-box">
        <h1 className="signup-title">Signup</h1>
        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" required />
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button className="google-signup-button">
          Signup with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
