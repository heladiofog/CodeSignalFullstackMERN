import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      setMessage(response.data);
    });
  }, []);

  return <div>{message}</div>;
}

export default App;
