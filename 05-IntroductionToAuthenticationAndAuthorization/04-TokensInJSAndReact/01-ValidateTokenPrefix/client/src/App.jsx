import axios from 'axios';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const token = '123ABC'; // This token is stored previously
    
    // TODO: Correctly set the Authorization header, with the 'Bearer ' prefix in the following GET request
    axios.get('/api/mission-control').then(response => {
    //Solution:
    // axios.get('/api/mission-control', {
    //   headers: { Authorization: 'Bearer ' + token }
    // })
      alert('Mission status: ' + response.data.status);
    }).catch(error => {
      alert('Error fetching mission control data');
    });
  
  }, []);

  return <h1>Space mission dashboard</h1>;
}