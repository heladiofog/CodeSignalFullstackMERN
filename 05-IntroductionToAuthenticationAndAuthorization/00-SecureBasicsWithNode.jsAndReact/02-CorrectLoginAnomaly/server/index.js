const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const user = { username: 'starSeeker', password: 'treasure' }; // Banking system admin

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username) {
    // Solution:
  // if (username === user.username && password === user.password) {
    res.status(200).send('Welcome to the Banking System!');
  } else {
    res.status(401).send('Access Denied: Incorrect credentials');
  }
});

app.listen(5000, () => console.log('Server is running on port 5000'));
