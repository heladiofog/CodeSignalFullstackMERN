import { useState } from 'react';
import axios from 'axios';

function App() {
  const [deletionMessage, setDeletionMessage] = useState('');

  const decommissionPlanet = () => {
    axios.delete('/api/decommission-planet')
      .then(response => setDeletionMessage(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <button onClick={decommissionPlanet}>Decommission Small Planets</button>
      <p>{deletionMessage}</p>
    </div>
  );
}

export default App;