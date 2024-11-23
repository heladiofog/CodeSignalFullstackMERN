import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/robotics').then((response) => setData(response.data));
    // TODO: handle and render any errors that might appear when calling the API method
    // Solution:
    // .catch(error => {
    //   console.log('Somethihng went erong:', error);
    //   setError(error.response.data.message || error.message);
    // });
  }, []);

  return (
    <div>
      <h1>Robotics Automation Status</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
