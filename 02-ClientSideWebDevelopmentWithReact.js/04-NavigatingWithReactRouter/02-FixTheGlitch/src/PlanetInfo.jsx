import { useParams } from 'react-router-dom';

function PlanetInfo() {
  let { name } = useParams();
  return (
    <div>
      <h1>Exploring {name}</h1>
    </div>
  );
}

export default PlanetInfo;
