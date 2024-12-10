import axios from 'axios';

function App() {
  const handleAccessSpaceData = (username) => {
    // Switching to GET request with query params
    axios
      .get('/api/space-experiments', { params: { username: username } })
      .then((response) => alert(response.data))
      .catch((error) => {
        const message =
          error.response && error.response.data
            ? error.response.data
            : 'An error occurred!';
        alert(message);
      });
  };

  return (
    <div>
      <button onClick={() => handleAccessSpaceData('astroJane')}>
        Access Space Experiments Data as astroJane
      </button>
      <button onClick={() => handleAccessSpaceData('cosmoPilot')}>
        Access Space Experiments Data as cosmoPilot
      </button>
    </div>
  );
}

export default App;
