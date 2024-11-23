import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlanetInfo from './PlanetInfo';

function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/mars">Mars</Link>
          </li>
          <li>
            <Link to="/venus">Venus</Link>
          </li>
          {/* Solution: */}
          {/* <li><Link to="/planet/mars">Mars</Link></li>
          <li><Link to="/planet/venus">Venus</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>Select a Planet</div>} />
        <Route path="/planet/:name" element={<PlanetInfo />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
