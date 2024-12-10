const express = require('express');
const cors = require('cors');

// Create a new express app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = 5000;

const users = [
  { id: 1, name: 'Captain Raynor', role: 'Admin' },
  { id: 2, name: 'Lieutenant Kerrigan', role: 'User' }, // Role needs to be changed
  // Solution:
  // { id: 2, name: 'Lieutenant Kerrigan', role: 'Admin' }, // Role needs to be changed
];

app.get('/api/check-access', (req, res) => {
  const user = users.find((u) => u.name === 'Lieutenant Kerrigan');
  if (user.role === 'Admin') {
    res.json({ message: 'Access granted to control panel.' });
  } else {
    res.status(403).json({ message: 'Access denied.' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
