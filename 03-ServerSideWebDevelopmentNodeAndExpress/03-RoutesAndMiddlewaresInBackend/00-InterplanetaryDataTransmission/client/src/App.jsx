import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    axios.get('/api/planet?name=Mars').then((response) => {
      setPlanetData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Planet Data</h1>
      <div>Name: {planetData.name}</div>
      <div>Type: {planetData.type}</div>
    </div>
  );
};

export default App;
