import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get('/api/planets')
      .then((response) => {
        setPlanets(response.data);
      })
      .catch((error) => console.error('Error fetching planets:', error));
  }, []);

  return (
    <div>
      <h1>Planets in our Solar System</h1>
      {planets.map((planet, index) => (
        <p key={index}>{JSON.stringify(planet)}</p>
      ))}
    </div>
  );
};

export default App;
