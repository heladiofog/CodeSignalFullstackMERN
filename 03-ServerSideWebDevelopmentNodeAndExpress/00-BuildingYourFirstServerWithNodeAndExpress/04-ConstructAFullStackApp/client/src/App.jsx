import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/space').then((response) => {
      setGreeting(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>{greeting || 'Connecting to Space...'}</h1>
    </div>
  );
};

export default App;
