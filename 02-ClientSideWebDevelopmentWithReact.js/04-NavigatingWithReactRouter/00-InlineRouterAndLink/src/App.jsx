import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/welcome">Welcome Page</Link>
      </nav>
      <Routes>
        <Route path="/welcome" element={<h1>Welcome to Our Website!</h1>} />
      </Routes>
    </Router>
  );
}
