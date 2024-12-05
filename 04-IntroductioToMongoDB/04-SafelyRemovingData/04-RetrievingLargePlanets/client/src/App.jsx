import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [deletedPlanet, setDeletedPlanet] = useState('');

  useEffect(() => {
    axios.delete('/api/planets/delete/Neptune')
      .then(response => setDeletedPlanet(response.data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <p>{deletedPlanet}</p>
    </div>
  );
}

export default App;