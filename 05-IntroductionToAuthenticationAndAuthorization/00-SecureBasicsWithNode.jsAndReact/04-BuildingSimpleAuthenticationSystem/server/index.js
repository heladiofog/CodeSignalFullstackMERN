const express = require('express');
const app = express();

app.use(express.json());

// TODO: Create an object representing a user with a username and password

// TODO: Set up a POST route '/api/login' that compares the incoming username and password with the user object
// On a username and password match, send back a welcome message; otherwise, send a 401 status with an error message

// TODO: Make your server listen on port 5000 and log a message when it's running
// Solution:
// TODO: Create an object representing a user with a username and password
const hardcodedUser = { id: '1', username: 'Tezca', password: 'tlipoca' };
// TODO: Set up a POST route '/api/login' that compares the incoming username and password with the user object
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (
    username === hardcodedUser.username &&
    password === hardcodedUser.password
  ) {
    res.status(200).send('Welcome to the Banking System!');
  } else {
    res.status(401).send('Access Denied: Invalid credentials');
  }
});
// TODO: Make your server listen on port 5000 and log a message when it's running
app.listen(5000, () =>
  console.log('Banking system server is humming on port 5000...🚂')
);