import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get('/api/planets')
      .then((response) => {
        setPlanets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Planets Sorted by Distance from the Sun</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {planet.name}: {planet.distanceFromSun}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
