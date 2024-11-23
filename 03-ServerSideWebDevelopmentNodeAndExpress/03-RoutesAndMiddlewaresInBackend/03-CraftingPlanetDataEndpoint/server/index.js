const express = require('express');
const app = express();

const planetData = {
  Mars: { type: 'Red Planet', name: 'Mars' },
  Earth: { type: 'Blue Planet', name: 'Earth' },
};

// Middleware: Log the request
app.use((req, res, next) => {
  // TODO: log the request's query parameter 'name' to the console
  // TODO: move to the next middleware
  // Solution:
  // TODO: log the request's query parameter 'name' to the console
  const planetName = req.query.name;
  console.log(`Planet requested: ${planetName}`);
  // TODO: move to the next middleware
  next();
});

// Route: Get information about a planet
app.get('/api/planet', (req, res) => {
  // TODO: retrieve a planet by the name provided in the corresponding query parameter
  // And return the planet's data in the response
  // Solution:
  const planetName = req.query.name;
  res.json(planetData[planetName]);
});

app.listen(5000, () => {
  console.log('Server is ready to explore the space on port 5000');
});
