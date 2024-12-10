const express = require('express');
const cors = require('cors');

// Create a new express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = 5000;

// Hardcoded list of users with their roles for demonstration purposes
const users = [
  { username: 'astroJane', role: 'Scientist' },
  { username: 'cosmoPilot', role: 'Astronaut' },
  { username: 'spaceBoss', role: 'Admin' },
];

function isScientist(req, res, next) {
  // TODO: Validate if the username from query parameters is a Scientist, if so, proceed with next(), otherwise set the status code to 403 with message indicating that access is denied
  // Solution:
  // TODO: Validate if the username from query parameters is a Scientist, if so, proceed with next(), otherwise set the status code to 403 with message indicating that access is denied
  // console.log(req.query);
  // const { username } = req.query;
  // const user = users.find((u) => u.username === username);

  // if (user && user.role === 'Scientist') {
  //   next();
  // } else {
  //   res
  //     .status(403)
  //     .send('Access denied: You do not have the required clearance.');
  // }
}

// Protect the space experiments data route with the isScientist middleware
app.get('/api/space-experiments', isScientist, (req, res) => {
  res.send('Welcome to the space experiments data!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
