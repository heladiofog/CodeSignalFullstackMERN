import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('/api/signup', { password }).then(response => {
      alert(`Signed up with hashed password: ${response.data.hashedPassword}`);
    });
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}