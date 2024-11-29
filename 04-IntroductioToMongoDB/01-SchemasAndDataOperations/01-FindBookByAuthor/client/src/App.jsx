import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/some-endpoint').then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to CodeSignal!</h1>
        <p>API message: {message}</p>
      </header>
    </div>
  );
}

export default App;
