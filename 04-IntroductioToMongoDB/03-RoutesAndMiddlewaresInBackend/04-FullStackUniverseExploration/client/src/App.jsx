import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [planet, setPlanet] = useState('');

  useEffect(() => {
    const planetName = 'Earth';
    axios.get(`/api/planet/${planetName}`).then((response) => {
      setPlanet(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Planet Info</h1>
      {planet && (
        <p>
          The planet {planet.planet} is {planet.status}!
        </p>
      )}
    </div>
  );
};

export default App;
