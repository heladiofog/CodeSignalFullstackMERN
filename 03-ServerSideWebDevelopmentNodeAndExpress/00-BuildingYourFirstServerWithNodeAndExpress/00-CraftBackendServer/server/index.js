const express = require('express');
const app = express();
const port = 5000;

// Returning a message from the server
app.get('/api/hello', (req, res) => {
  res.send('Welcome from Express.js server!');
});

// The server is set up to start listening on your specified port.
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
