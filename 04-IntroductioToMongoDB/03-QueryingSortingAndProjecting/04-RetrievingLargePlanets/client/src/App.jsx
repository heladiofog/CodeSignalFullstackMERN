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
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {planet.name} - {planet.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
