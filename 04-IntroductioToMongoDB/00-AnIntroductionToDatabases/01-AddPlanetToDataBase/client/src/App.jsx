import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Fetching the planet data from the endpoint
    axios.get('/api/some-endpoint').then((response) => {
      // Setting the state with the fetched planet data
      setPlanets(response.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to CodeSignal!</h1>
        <p>Planet data from the API:</p>
        {planets.length > 0 ? (
          <ul>
            {planets.map((planet, index) => (
              <li key={index}>
                {planet.name} - Size: {planet.size}, Mass: {planet.mass},
                Distance from sun: {planet.distanceFromSun}
              </li>
            ))}
          </ul>
        ) : (
          <p>No planet data available.</p>
        )}
      </header>
    </div>
  );
}

export default App;
