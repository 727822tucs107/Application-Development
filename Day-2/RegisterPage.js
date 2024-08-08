import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css'; // Import the CSS file for styling

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
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
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <br />
          <button type="submit">Register</button>
          <br />
          <p>
            Already registered? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
