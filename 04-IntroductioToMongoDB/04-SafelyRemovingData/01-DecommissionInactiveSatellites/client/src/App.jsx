import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    fetchSatellites();
  }, []);

  const fetchSatellites = () => {
    axios.get('/api/satellites')
      .then(response => setSatellites(response.data))
      .catch(error => console.error('Error fetching satellites:', error.message));
  };

  const handleDecommission = (satelliteName) => {
    axios.delete(`/api/delete-satellites/${satelliteName}`)
      .then(() => {
        fetchSatellites(); // Refetch the satellites to get the updated list
      })
      .catch(error => console.error('Error decommissioning satellite:', error.message));
  };

  return (
    <div className="App">
      <h1>Space Maintenance</h1>
      {satellites.length > 0 ? (
        <ul>
          {satellites.map(satellite => (
            <li key={satellite._id}>
              {satellite.name}
              {" "}
              <button onClick={() => handleDecommission(satellite.name)}>Decommission</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No satellites found</p>
      )}
    </div>
  );
}

export default App;