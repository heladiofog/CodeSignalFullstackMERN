const express = require('express');
const app = express();
const PORT = 5000;

// TODO: Create middleware to log the request URL and the time of the request.

// TODO: Define a route to respond with information about a given planet.

// TODO: Make the server listen on port 5000.

// Solution:
/* 
// TODO: Create middleware to log the request URL and the time of the request.
app.use((req, res, next) => {
  const planetName = req.params.planetName;
  console.log(req.params);
  console.log(`Time: ${Date.now()}, URL: ${req.url}, planet: ${planetName}`);
  // Pass to next middleware
  next();
});

// TODO: Define a route to respond with information about a given planet.
app.get('/api/planet/:planetName', (req, res) => {
  const planetName = req.params.planetName;
  console.log('params', req.params);
  const planetData =
    planetName === 'Earth'
      ? { planet: 'Earth', status: 'living' }
      : { planet: 'Vulcano', status: 'Unknown' };
  res.json(planetData);
});
// TODO: Make the server listen on port 5000.
app.listen(PORT);
 */