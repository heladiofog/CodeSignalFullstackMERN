import axios from 'axios';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    const tokenFromServer = await axios.get('/api/login'); // Simulate server token generation
    localStorage.setItem('authToken', tokenFromServer.data);
    setToken(tokenFromServer.data);
    alert('Logged in successfully!');
  };

  const fetchSecretData = async () => {
    try {
      const response = await axios.get('/api/secret-data', {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(`Secret data: ${response.data}`);
    } catch (error) {
      alert('Error fetching secret data!');
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={fetchSecretData}>Get Secret Data</button>
    </div>
  );
}