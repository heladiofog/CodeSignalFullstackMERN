import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpaceExplorerApp = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/api/greet-astronaut').then((response) => {
      setGreeting(response.data);
    });
  }, []);

  return (
    <div>
      {greeting ? <h1>{greeting}</h1> : <h1>Communicating with base...</h1>}
    </div>
  );
};

export default SpaceExplorerApp;
