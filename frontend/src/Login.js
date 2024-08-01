import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">
          <i className="fas fa-calendar"></i>
        </div>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button active">Login</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button">Signup</button>
          </Link>
        </div>
      </header>
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <button className="google-login-button">
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
