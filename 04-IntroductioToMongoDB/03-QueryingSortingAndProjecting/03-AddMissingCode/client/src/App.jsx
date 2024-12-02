import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get('/api/planets')
      .then((response) => setPlanets(response.data))
      .catch((error) => console.error('Error fetching planets:', error));
  }, []);

  return (
    <div>
      <h1>Planets in Our Solar System</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {planet.name}, mass: {planet.mass.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
