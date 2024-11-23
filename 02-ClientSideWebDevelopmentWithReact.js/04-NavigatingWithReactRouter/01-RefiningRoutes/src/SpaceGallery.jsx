import { Outlet } from 'react-router-dom';

function SpaceGallery() {
  return (
    <div>
      <h1>Welcome to the Cosmos Gallery</h1>
      <Outlet />
    </div>
  );
}

export default SpaceGallery;
