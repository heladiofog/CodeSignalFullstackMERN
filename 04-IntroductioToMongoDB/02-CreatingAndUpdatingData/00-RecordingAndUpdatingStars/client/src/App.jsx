import { useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('');

  const addStars = () => {
    // Add Orionis
    axios
      .get('/api/add-star-orionis')
      .then((response) => setStatus((prev) => `${prev}\n${response.data}`));
    // Add Polaris
    axios
      .get('/api/add-star-polaris')
      .then((response) => setStatus((prev) => `${prev}\n${response.data}`));
  };

  const updatePolarisMagnitude = () => {
    axios
      .get('/api/update-polaris-magnitude')
      .then((response) => setStatus((prev) => `${prev}\n${response.data}`));
  };

  return (
    <div className="App">
      <h1>Astronomy Records</h1>
      <button onClick={addStars}>Add Stars</button>
      <button onClick={updatePolarisMagnitude}>Update Polaris Magnitude</button>
      <pre>Status: {status.trim()}</pre>
    </div>
  );
}

export default App;
