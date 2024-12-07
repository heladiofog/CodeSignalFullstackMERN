import { useState } from 'react';
import axios from 'axios';

function App() {
  // TODO: Set the initial state for the loggedIn variable using useState

  const handleLogin = () => {
    // TODO: Send a GET request to the backend /api/login endpoint to check admin credentials with query params: username: 'admin', password: 'admin'
  };

  // TODO: Return JSX including a 'Login as Admin' button and a welcome message if logged in
}

export default App;
// Solution
/*
const App = () => {
  // TODO: Set the initial state for the loggedIn variable using useState
  const [loggedIn, setLogedIn] = useState(false);

  const handleLogin = () => {
    // TODO: Send a GET request to the backend /api/login endpoint to check admin credentials with query params: username: 'admin', password: 'admin'
    const username = 'admin';
    const password = 'admin';
    axios.get(`/api/login?username=${username}&password=${password}`)
      .then(response => {
        setLogedIn(response.data);
      })
      .catch(error => {
        console.log(error);
        setLogedIn('Login failed. Please try again.');
      });
  };
  // TODO: Return JSX including a 'Login as Admin' button and a welcome message if logged in
  return (
    <div>
      <button onClick={handleLogin}>Login as Admin</button>
      <p>{loggedIn && 'Welcome to the online bookstore!'}</p>
    </div>
  );
};

export default App;
*/