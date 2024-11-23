import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [starsMessage, setStarsMessage] = useState('');

  useEffect(() => {
    axios.get('/api/stars').then((response) => {
      setStarsMessage(response.data);
    });
  }, []);

  return <div>{starsMessage || 'Loading star message...'}</div>;
};

export default App;
