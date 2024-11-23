import { useParams } from 'react-router-dom';

export default function PlanetPage() {
  let { name } = useParams();
  return <h2>Welcome to the {name.toUpperCase()} exploration page!</h2>;
  // string `toUpperCase` method returns a string with each lowercase letter changed to its corresponding uppercase one
}
