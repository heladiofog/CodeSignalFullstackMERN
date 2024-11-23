const express = require('express');
const app = express();

const planetData = {
  Mars: { type: 'Red Planet', name: 'Mars' },
  Venus: { type: 'Morning Star', name: 'Venus' },
  Jupiter: { type: 'Gas Giant', name: 'Jupiter' },
};

// Middleware to log request path and time
app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}, Path: ${req.path}, planrt is Mars`);
  // Solution:
  /* const planetName = req.query.name;
  const MARS_NAME = 'Mars';
  if (planetName === MARS_NAME) {
    console.log(`Time: ${Date.now()}, Path: ${req.path}, planrt is Mars`);
  }
  next(); */
});

// Route to get information about a planet based on its name via query parameters
app.get('/api/planet', (req, res) => {
  const planetName = req.query.name;
  const info = planetData[planetName] || { error: 'Planet not found' };
  res.json(info);
});

app.listen(5000, () => console.log('Server is running on port 5000'));
