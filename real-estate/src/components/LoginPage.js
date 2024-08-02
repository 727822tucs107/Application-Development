import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '12345') {
      navigate('/admin-panel');
    } else if (email === 'user@gmail.com' && password === '12345') {
      navigate('/user-panel');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
          <br />
          <a href="/forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
