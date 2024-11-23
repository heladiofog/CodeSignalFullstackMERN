import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    // Fetch information about planet Mars
    axios.get('/api/planet', { params: { name: 'Mars' } }).then((response) => {
      setPlanetInfo(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Planet Information</h1>
      <p>
        {planetInfo.name
          ? `Name: ${planetInfo.name}, Type: ${planetInfo.type}`
          : 'Loading...'}
      </p>
    </div>
  );
}
