import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import ViewUsers from './ViewUsers';
import EditUsers from './EditUsers';
import AddUsers from './AddUsers';
import DeleteUsers from './DeleteUsers';
import Feedback from './Feedback';
import Logout from './Logout';
import './AdminPanel.css';

function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com' },
    { id: 5, name: 'Chris Brown', email: 'chris@example.com' },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="admin-panel">
      <aside className="side-panel">
        <ul>
          <li><Link to="/admin-panel/dashboard">Dashboard</Link></li>
          <li><Link to="/admin-panel/view-users">View Users</Link></li>
          <li><Link to="/admin-panel/edit-users">Edit Users</Link></li>
          <li><Link to="/admin-panel/add-users">Add Users</Link></li>
          <li><Link to="/admin-panel/delete-users">Delete Users</Link></li>
          <li><Link to="/admin-panel/feedback">Feedback</Link></li>
          <li><Link to="/admin-panel/logout">Logout</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view-users" element={<ViewUsers users={users} deleteUser={deleteUser} />} />
          <Route path="/edit-users" element={<EditUsers />} />
          <Route path="/add-users" element={<AddUsers addUser={addUser} />} />
          <Route path="/delete-users" element={<DeleteUsers deleteUser={deleteUser} />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPanel;
