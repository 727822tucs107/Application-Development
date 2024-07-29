import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/category">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel">Admin Panel</NavLink>
        </li>
        <li>
          <NavLink to="/user-panel">User Panel</NavLink>
        </li>
      </ul>
      <div className="profile">
        <NavLink to="/profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHuXkyI0tzd3bExFuh-l50ed5cUoHEwv0Crvg-47vSzRRJsrfPafIMK-DGVqQCdXv2-4&usqp=CAU" alt="Profile" className="profile-picture" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
