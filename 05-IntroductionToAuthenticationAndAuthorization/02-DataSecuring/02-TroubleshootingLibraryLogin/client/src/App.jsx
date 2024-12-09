import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [password, setPassword] = useState('');
  const [userID, setUserID] = useState('');

  const handleSignup = () => {
    axios.post('/api/signup', { password }).then(response => {
      console.log(response.data);
      setUserID(response.data.userID);
    });
  };

  const handleLogin = () => {
    // Can you spot the issue with API call?
    axios.post('/api/login', { password }).then(response => alert(response.data)).catch(err => alert(err.message));
    // Solution:
    // axios.post('/api/login', { userID, password }).then(response => alert(response.data)).catch(err => alert(err.message));
  };

  return (
    <div>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Log In</button>
      {userID && <p>Your User ID: {userID}</p>}
    </div>
  );
}