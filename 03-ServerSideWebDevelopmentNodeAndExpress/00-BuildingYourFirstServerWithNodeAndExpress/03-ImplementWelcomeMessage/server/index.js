const express = require('express');
const app = express();
const port = 5000;

app.get('/api/greet-astronaut',
  // TODO: Replace this comment with the line that
  // creates an endpoint handler function sending a greeting back to the client
  // Solution:
  // (req, res) => {
  //   res.send('Hello everybody from the server Land!');
  // }
);

app.listen(port, () => {
  console.log(`Space Exploration Server listening at http://localhost:${port}`);
});