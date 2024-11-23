import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/welcome').then((response) => {
      setGreeting(response.data);
      // Solution: WRONG for CodeSignal!
      // setGreeting(response.data.message);
    });
  }, []);

  return (
    <div>
      <h1>{greeting || 'Loading greeting...'}</h1>
    </div>
  );
}

export default App;
