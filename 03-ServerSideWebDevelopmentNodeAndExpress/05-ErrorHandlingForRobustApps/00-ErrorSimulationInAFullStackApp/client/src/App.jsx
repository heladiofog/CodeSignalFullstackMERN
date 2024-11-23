import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [error, setError] = useState('');

  axios.get('/api/robotics').catch((err) => {
    setError(
      err.response
        ? err.response.data.error
        : "Robot couldn't connect to server."
    );
  });

  return <div>{error && <p>Error: {error}</p>}</div>;
}

export default App;
