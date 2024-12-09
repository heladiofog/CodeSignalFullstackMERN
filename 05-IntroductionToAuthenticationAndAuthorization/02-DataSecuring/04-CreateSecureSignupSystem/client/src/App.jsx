import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    axios.post('/api/signup', { username, password })
      .then(response => setMessage(response.data))
      .catch(error => setMessage(error.response.data));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
      {message && <p>{message}</p>}
    </div>
  );
}