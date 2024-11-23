import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    axios
      .get('/api/planets', { params: { name: 'Earth' } })
      .then((response) => setPlanetData(response.data));
  }, []);

  return (
    <div>
      {planetData.name ? (
        <p>
          The planet {planetData.name} is in the {planetData.orbit} orbit.
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
