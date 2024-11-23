import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlanetOverview from './PlanetOverview';

// TODO: Define and export your SpaceExplorerApp component.
// Inside your component:
// 1. Return the Router component as the root element.
// 2. Create a navigation menu with a Link that directs to the Mars overview.
// 3. Set up the Routes for navigating to the Mars overview using the PlanetOverview component.

export default function App() {
  return (
    <Router>
      <header>
        <h1>Welcome visitor!</h1>
      </header>
      <nav>
        <Link to="/mars-overview">Mars Overview</Link>
      </nav>
      <Routes>
        <Route
          path="/mars-overview"
          element={<PlanetOverview />}
        />
      </Routes>
    </Router>
  );
}
