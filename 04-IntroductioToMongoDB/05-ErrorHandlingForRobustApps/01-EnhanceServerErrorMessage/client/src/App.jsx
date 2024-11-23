import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [errorMessage, setErrorMessage] = useState('');

  axios
    .get('/api/robot/status')
    .then((response) => {
      // Handle success
      console.log(response.data);
    })
    .catch((error) => {
      // Handle error, set a user-friendly message
      setErrorMessage(
        'The robot is currently unavailable. Please try again later.'
      );
    });

  return <div>{errorMessage && <p>{errorMessage}</p>}</div>;
}
