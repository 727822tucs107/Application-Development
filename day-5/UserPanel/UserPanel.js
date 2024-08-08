import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Properties from './Properties';
import Messages from './Messages';
import Logout from './Logout';
import './UserPanel.css';

function UserPanel() {
  return (
    <div className="user-panel">
      <aside className="side-panel">
        <ul>
          <li><Link to="/user-panel/profile">Profile</Link></li>
          <li><Link to="/user-panel/properties">Properties</Link></li>
          <li><Link to="/user-panel/messages">Messages</Link></li>
          <li><Link to="/user-panel/logout">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="properties" element={<Properties />} />
          <Route path="messages" element={<Messages />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default UserPanel;
