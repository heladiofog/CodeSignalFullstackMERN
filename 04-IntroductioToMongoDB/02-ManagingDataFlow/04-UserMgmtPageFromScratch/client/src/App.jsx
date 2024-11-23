import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('New User');

  // TODO: Use useEffect to fetch the list of users from the server and update the 'users' state when the component mounts.

  // TODO: Implement a function 'handleAddUser' that handles adding a user.

  // Solution:
  // TODO: Use useEffect to fetch the list of users from the server and update the 'users' state when the component mounts.
  // useEffect(() => {
  //   axios.get('/api/users').then((response) => {
  //     setUsers(response.data); // Update state with products
  //   });
  // }, []);

  // TODO: Implement a function 'handleAddUser' that handles adding a user.
  // const handleAddUser = (e) => {
  //   axios
  //     .post('/api/users', { name: newUser })
  //     .then((response) => setUsers([...users, response.data]))
  //     .catch((error) => console.log(error.message));
  // };

  return (
    <div>
      <input value={newUser} onChange={(e) => setNewUser(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
