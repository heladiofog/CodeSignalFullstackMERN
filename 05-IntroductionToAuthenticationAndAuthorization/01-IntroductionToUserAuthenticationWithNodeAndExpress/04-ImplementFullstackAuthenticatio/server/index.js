const express = require('express');
const app = express();

// TODO: Set up your middleware and route for handling the login logic
// Solution:
const hardcodedAuth = (req, res, next) => {
  const hardCodedUser = { username: 'admin', password: 'admin' };
  const isAuthenticated = (hardCodedUser.username === req.query.username && hardCodedUser.password === req.query.password);

  // Call next() if authenticated, else respond with status 401 and 'Invalid credentials'
  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send("Invalid credentials");
  }
};

app.use('/api/login', hardcodedAuth, (req, res) => {
  // TODO: Update to include your middleware and send a response on successful authentication
  // Solution:
  try {
    res.send("Welcome to the Online Bookstore!");
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).send("Authentication failed due to an error");
  }
});  

app.listen(5000, () => console.log(`Bookstore server running!!`)); // TODO: Add a console log to indicate that the server is running