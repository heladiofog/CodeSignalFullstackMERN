import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [token, setToken] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('/api/login');
      const generatedToken = response.data.authToken;
      localStorage.setItem('authToken', generatedToken);
      setToken(generatedToken);
      alert('Logged in with token: ' + generatedToken);
    } catch (error) {
      alert('Login failed: ' + (error.response ? error.response.data : 'Server not reachable.'));
    }
  };

  const checkSpaceshipStatus = () => {
    const authToken = localStorage.getItem('authToken');
    axios.get('/api/check-spaceship', {
      headers: { Authorization: 'Bearer ' + authToken }
    }).then(response => {
      alert('Spaceship status: ' + response.data.status);
    }).catch(error => {
      alert('Error: ' + (error.response ? error.response.data : 'Server not reachable.'));
    });
  };

  return (
    <div>
      <button onClick={login}>Launch and Authenticate</button>
      <button onClick={checkSpaceshipStatus}>Check Spaceship Status</button>
    </div>
  );
}