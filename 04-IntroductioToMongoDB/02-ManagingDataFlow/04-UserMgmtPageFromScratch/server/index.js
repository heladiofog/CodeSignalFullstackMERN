const express = require('express');
const app = express();
app.use(express.json());

let users = [{ name: 'John' }, { name: 'Jane' }];

// TODO: Set up a GET route /api/users that sends the list of users back in response.

// TODO: Set up a POST route /api/users that adds the incoming new user to the list of users and sends the new user back in response.

// TODO: Make your server listen on port 5000 and add a console message.

// Solution:
/*
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [{ name: 'John' }, { name: 'Jane' }];

// TODO: Set up a GET route /api/users that sends the list of users back in response.
app.get('/api/users', (req, res) => {
  res.json(users);
});
// TODO: Set up a POST route /api/users that adds the incoming new user to the list of users and sends the new user back in response.
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});


// TODO: Make your server listen on port 5000 and add a console message.
app.listen(PORT);
*/