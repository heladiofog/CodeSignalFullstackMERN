import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlanetPage from './PlanetPage';

export default function SpaceApp() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/planets/mars">Mars</Link></li>
          {/* TODO: Create a link to the Venus page in the React Router */}{/* TODO: Create a link to the Venus page in the React Router */}
          <li><Link to="">Venus</Link></li>
          {/* Solution: */}
          {/* <li><Link to="/planets/venus">Venus</Link></li> */}
        </ul>
      </nav>
      <Routes>
        {/* TODO: Create a route that matches the URL path to a planet name and renders the PlanetPage component */}
        {/* Solution: */}
        {/* <Route path="/planets/:name" element={<PlanetPage />} /> */}
      </Routes>
    </Router>
  );
}