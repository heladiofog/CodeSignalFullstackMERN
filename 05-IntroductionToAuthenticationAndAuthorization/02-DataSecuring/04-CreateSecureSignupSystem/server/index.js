const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let users = { user1: 'dsdsd' }; // This will store users

// TODO: Define a POST route for '/api/signup' to handle user signup.

// Within this route, take the provided username and password from the request,
// validate them – check if they're not empty
// If there is a user with such a username, return an error 409 with message 'Username is already taken!'
// otherwise hash the password and store the credentials in 'users' object.
// Remember to handle errors!

// TODO: Start the server and listen on a port

// Solution:
/*
// TODO: Define a POST route for '/api/signup' to handle user signup.
app.post('/api/signup', (req, res) => {
  // Within this route, take the provided username and password from the request,
  // validate them – check if they're not empty
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).send('User an pasword are required.');
  }
  // If there is a user with such a username, return an error 409 with message 'Username is already taken!'
  if (users[username]) {
    return res.status(409).send('Username is already taken!');
  }
  // otherwise hash the password and store the credentials in 'users' object.
  try {
    bcrypt.hash(password, 10, (error, hashedPassword) => {
      // Remember to handle errors!
      if (error) {
        throw new Error('Error while hashing.');
      }

      users[username] = hashedPassword;
      res.status(200).send('User successfully created!');
    });
  } catch (error) {
    console.log('Error on signing up.', error);
    res.status(500).send('Error signing up user ' + username + '!');
  }
});

// TODO: Start the server and listen on a port
app.listen(port, () => console.log(`Library Mgmt System up and running on port ${port}`));
*/