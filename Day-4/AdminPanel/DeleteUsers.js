import React, { useState } from 'react';

function DeleteUsers({ deleteUser }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser(Number(id));
    setId('');
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
}

export default DeleteUsers;
