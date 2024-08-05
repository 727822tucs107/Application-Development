import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="logout-page">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
