const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(express.json());
app.use(cors());

// Simulated user data for demonstration purposes
const users = [
  { id: 1, username: 'astronaut_alice', role: 'Engineer' },
  { id: 2, username: 'astronaut_bob', role: 'Scientist' },
];

// Middleware to check for space station data access based on user role
const checkRoleAccess = (allowedRoles) => (req, res, next) => {
  const { userId } = req.params;
  const user = users.find((u) => u.id.toString() === userId);

  if (user && allowedRoles.includes(user.role)) {
    next();
  } else {
    res
      .status(403)
      .send('Access denied: You do not have the required clearance.');
  }
};

app.get(
  '/space-station-data/:userId',
  checkRoleAccess(['Engineer']),
  // Solution:
  // checkRoleAccess(['Engineer', 'Scientist']),
  (req, res) => {
    res.send('Space Station data accessed successfully.');
  }
);

app.listen(5000, () => console.log('Server running on port 5000'));
