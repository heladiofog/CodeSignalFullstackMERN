const express = require('express');
const app = express();
const port = 5000;

app.get('/api/stars', (req, res) => {
  res.send('The stars are bright tonight!');
  // res.send('Welcome, Space Explorer! The cosmos awaits you.'); // Solution
});

app.listen(port, () => {
  console.log(
    `Space server is listening at http://localhost:${port}/api/stars`
  );
});
