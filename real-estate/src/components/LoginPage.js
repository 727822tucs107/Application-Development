import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
          <br />
          <Link to="/forgot-password">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
