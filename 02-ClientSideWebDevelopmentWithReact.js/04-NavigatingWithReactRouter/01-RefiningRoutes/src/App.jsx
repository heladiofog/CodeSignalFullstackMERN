import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SpaceGallery from './SpaceGallery';
import Galaxy from './Galaxy';
import Stars from './Stars';

export default function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/space/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/space/gallery/star-exhibits">Stars</Link>
          </li>
          <li>
            <Link to="/space/gallery/galaxy-info">Galaxies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/space/gallery/*" element={<SpaceGallery />}>
          <Route path="star-exhibits" element={<Stars />} />
          <Route path="galaxy-info" element={<Galaxy />} />
        </Route>
      </Routes>
    </Router>
  );
}

/* Solution: */
// export default function AppRouter() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li><Link to="/space/gallery">Gallery</Link></li>
//           <li><Link to="/space/gallery/exhibits/star">Stars</Link></li>
//           <li><Link to="/space/gallery/exhibits/galaxies">Galaxies</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/space/gallery/*" element={<SpaceGallery />}>
//           <Route path="exhibits/*">
//             <Route path="star" element={<Stars />} />
//             <Route path="galaxies" element={<Galaxy />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }