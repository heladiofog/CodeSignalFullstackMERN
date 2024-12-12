import axios from 'axios';
import { useEffect } from 'react';

localStorage.setItem('authToken', 'mission-token-123'); // Setting the token here manually to mock the logic

export default function App() {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    axios.get('/api/check-token', {
      // TODO: Add an authorization header to check if the token is valid
      // Solution:
      // headers: { Authorization: 'Bearer ' + token }
    }).then(response => {
      alert('Token is valid!');
    }).catch(error => {
      alert('Token is not valid!');
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the Mission Control Center!</h1>
    </div>
  );
}