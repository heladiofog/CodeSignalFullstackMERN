const express = require('express');
const app = express();
const port = 5000;

app.get('/space-greeting', (req, res) => {
// app.get('/api/space-greeting', (req, res) => { // Solution (Fix)
  res.send('Welcome to the Space Exploration Program!');
});

app.listen(port, () => {
  console.log(
    `Server is ready for space exploration at http://localhost:${port}`
  );
});
