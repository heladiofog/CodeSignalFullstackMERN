const express = require('express');
const app = express();

const planets = {
  Mars: { name: 'Mars', type: 'Red Planet' },
  Earth: { name: 'Earth', type: 'Blue Planet' },
  Venus: { name: 'Venus', type: 'Evening Star' },
};

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log('Query Parameters:', req.query);
  next();
});

app.get('/api/planet', (req, res) => {
  const planetName = req.query.name;
  res.json(planets[planetName] || { message: 'Planet not found' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
