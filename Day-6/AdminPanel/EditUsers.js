import React, { useState } from 'react';
import './EditUsers.css';

function EditUsers() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user editing logic
  };

  return (
    <div className="edit-users-container">
      <h2>Edit User</h2>
      <form className="edit-users-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditUsers;
