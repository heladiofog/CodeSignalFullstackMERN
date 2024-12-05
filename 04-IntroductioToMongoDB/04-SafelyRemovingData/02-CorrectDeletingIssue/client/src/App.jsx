import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState();
  const [error, setError] = useState('');
  
  useEffect(() => {
    axios.post('/api/delete-planets')
      .then(response => setMessage(response.data.message))
      .catch(error => setError(error.response.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>
  } else {
    return (
      <div>
        <h1>Space Maintenance</h1>
        {message}
      </div>
    );
  }
}

export default App;