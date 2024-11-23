import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios
      .get('/api/space-greeting')
      .then((response) => setGreeting(response.data));
  }, []);

  return (
    <div>
      {greeting ? <h1>{greeting}</h1> : <p>Loading interstellar greeting...</p>}
    </div>
  );
};

export default App;
