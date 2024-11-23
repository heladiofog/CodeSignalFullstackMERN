import { useState, useContext, createContext } from 'react';

// Create a context for user profile data
const UserProfileContext = createContext();

export default function App() {
  const [username, setUsername] = useState('CosmoCoder');

  return (
    <UserProfileContext.Provider value={{ username, setUsername }}>
      <Navbar />
    </UserProfileContext.Provider>
  );
}

function Navbar() {
  const { username } = useContext(UserProfileContext);
  return <div>Welcome, {username}!</div>;
}
