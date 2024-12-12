import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    let token = '12345'; // simplified token for practice purposes
    localStorage.setItem('authToken', token);
    setLoggedIn(true);
    alert('Logged in with token: ' + token);
  };

  const checkMissionStatus = () => {
    let token = localStorage.getItem('authToken');
    alert(token);
    axios.get('/api/mission-status', {
      headers: { Authorization: 'Bearer ' + token }
    }).then(response => {
      alert('Mission Status: ' + response.data.status);
    });
  };

  return (
    <div>
      <button onClick={login}>Log In for Mission</button>
      <button onClick={checkMissionStatus}>Check Mission Status</button>
    </div>
  );
}