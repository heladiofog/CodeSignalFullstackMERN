const express = require('express');
const app = express();

const planets = {
  Earth: { name: 'Earth', orbit: 'third' },
  Mars: { name: 'Mars', orbit: 'fourth' },
};

app.get('/api/planets', (req, res) => {
  const planetName = req.query.type;
  // Solution:
  // const planetName = req.query.name;
  const planetInfo = planets[planetName] || {
    name: 'Unknown',
    orbit: 'Unknown',
  };
  res.json(planetInfo);
});

app.listen(5000, () => console.log('Server running on port 5000'));
