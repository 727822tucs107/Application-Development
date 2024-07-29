import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Users from './Users';
import Settings from './Settings';
import Logout from './Logout';
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <aside className="side-panel">
        <ul>
          <li><Link to="/admin-panel/dashboard">Dashboard</Link></li>
          <li><Link to="/admin-panel/users">Users</Link></li>
          <li><Link to="/admin-panel/settings">Settings</Link></li>
          <li><Link to="/admin-panel/logout">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPanel;
