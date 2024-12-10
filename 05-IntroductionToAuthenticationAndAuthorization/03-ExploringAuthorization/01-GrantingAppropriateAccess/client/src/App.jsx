import { useEffect } from 'react';
import axios from 'axios';

const SpaceStationAccess = () => {
  useEffect(() => {
    axios
      .get('/api/check-access')
      .then((response) => alert(response.data.message))
      .catch((error) =>
        alert(
          'Access denied: ' +
            (error.response ? error.response.data.message : error.message)
        )
      );
  }, []);

  return (
    <div>
      <h1>Welcome to the Space Station. Checking Access...</h1>
    </div>
  );
};

export default SpaceStationAccess;
