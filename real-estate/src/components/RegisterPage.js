import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './RegisterPage.css'; // Import the CSS file for styling

function RegisterPage() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    roles: '' // Added roles field
  });

  const navigate = useNavigate();
  const apiurl = "http://127.0.0.1:8080/api/users/create";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const validate = () => {
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(apiurl, {
          id: 0,
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          roles: formValues.roles // Adjust according to your requirements
        });
        console.log(response);
        alert("User created successfully");
        navigate("/login");
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Roles:
            <select
              name="roles"
              value={formValues.roles}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #792a2a' }}
            >
              <option value="">Select a role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
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
