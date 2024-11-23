import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [marsPlanetData, setMarsPlanetData] = useState({});
  const [venusPlanetData, setVenusPlanetData] = useState({});

  useEffect(() => {
    axios.get('/api/planet?name=Mars').then((response) => {
      setMarsPlanetData(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get('/api/planet?name=Venus').then((response) => {
      setVenusPlanetData(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Mars Planet Data</h1>
        <div>Name: {marsPlanetData.name}</div>
        <div>Type: {marsPlanetData.type}</div>
      </div>
      <div>
        <h1>Venus Planet Data</h1>
        <div>Name: {venusPlanetData.name}</div>
        <div>Type: {venusPlanetData.type}</div>
      </div>
    </div>
  );
};

export default App;
