import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAddUser = () => {
    // Logic to add user
    // For demo purposes, we'll just navigate back
    navigate('/admin-panel/view-users');
  };

  return (
    <div>
      <h2>Add Users</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default AddUsers;
