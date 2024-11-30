import { useState } from 'react';
import axios from 'axios';

function App() {
  const [planet, setPlanet] = useState('');
  const [message, setMessage] = useState('');

  const addPlanet = async () => {
    try {
      const response = await axios.post('/api/planets', { name: planet });
      setMessage('Planet added successfully: ' + JSON.stringify(response.data));
    } catch (error) {
      setMessage('Error adding new planet.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      />
      <button onClick={addPlanet}>Add Planet</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
