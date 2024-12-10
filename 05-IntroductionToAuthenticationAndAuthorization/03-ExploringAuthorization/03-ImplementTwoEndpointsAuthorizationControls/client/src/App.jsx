import axios from 'axios';

const checkAccess = (role) => {
  // Capitalizing the role to match the server's case sensitivity
  const roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1);
  axios
    .get(`/api/${roleCapitalized}`)
    .then((response) => {
      alert(response.data.message);
    })
    .catch((error) => {
      alert('Access denied: ' + error.response.data);
    });
};

export default function App() {
  return (
    <div>
      <h1>Hello astro-novice!</h1>
      <button onClick={() => checkAccess('scientist')}>Scientist Area</button>
      <button onClick={() => checkAccess('engineer')}>Engineer Zone</button>
    </div>
  );
}
