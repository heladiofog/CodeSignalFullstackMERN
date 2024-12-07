const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const hardcodedAuth = (req, res, next) => {
  // TODO: Compare req.body.username and req.body.password with hardcoded values { username='admin', password='admin' }
  // Call next() if authenticated, else respond with status 401 and 'Invalid credentials'
  // Solution:
  // const hardCodedUser = { username:'admin', password:'admin' };
  // const isAuthenticated = (hardCodedUser.username === req.body.username &&  hardCodedUser.password === req.body.password);
    
  //   // Call next() if authenticated, else respond with status 401 and 'Invalid credentials'
  //   if (isAuthenticated) {
  //     next();
  //   } else {
  //     res.status(401).send("Invalid credentials");
  //   }
};

app.post('/api/login', hardcodedAuth, (req, res) => {
  // Server should send back a welcome message if the user is authenticated
  // Solution:
  // try {
  //   res.send("Welcome to the Online Bookstore!");
  // } catch (error) {
  //   console.error('Authentication error:', error);
  //   res.status(500).send("Authentication failed due to an error");
  // }
});

app.listen(5000, () => console.log("Server running on port 5000"));