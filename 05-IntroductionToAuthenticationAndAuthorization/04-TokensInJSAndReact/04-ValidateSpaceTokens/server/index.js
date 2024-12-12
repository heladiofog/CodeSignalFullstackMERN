const express = require('express');
const app = express();

const port = 5000;
const validTokens = ['mission-token-123']; // In real scenario, this will be more secure and dynamic

app.get('/api/check-token', (req, res) => {
  // TODO: Validate the token from the request and send a response
  // Solution
  // const authHeader = req.headers.authorization;
  // if (!authHeader) {
  //   return res.status(401).send('No token provided!');
  // }

  // const token = authHeader.split(' ')[1];
  // if (!validTokens.includes(token)) {
  //   return res.status(401).send('Invalid token!');
  // }

  // res.send('Authentication successfully achieved!');
});

app.listen(port, () => console.log(`Server running on port ${port}...`));
