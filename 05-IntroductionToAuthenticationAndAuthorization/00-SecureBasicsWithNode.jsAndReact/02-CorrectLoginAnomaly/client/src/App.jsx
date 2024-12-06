import { useState } from 'react';
import axios from 'axios';

function App() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const login = () => {
    axios
      .post('/api/login', credentials)
      .then((response) => {
        alert('Login successful!');
      })
      .catch((error) => {
        alert('Login failed!');
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Your password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
