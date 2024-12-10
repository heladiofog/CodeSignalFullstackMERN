const express = require('express');
const app = express();
const port = 5000;

const user = { username: 'astro-novice', role: 'Scientist' }; // For simplicity let's assume this is the logged in user

// TODO: Write a middleware function that checks if a user has the 'Scientist' role.
// If they do, let them proceed to the Science Lab.

// TODO: Write another middleware function that checks if a user has the 'Engineer' role.
// If they do, let them proceed to the Engineering Deck.

// These users are trying to go to exclusive areas in the Space Station.
// TODO: Create two routes: /api/scientist for the Science Lab and /api/engineer for the Engineering Deck.
// Verify the user's role using your middleware functions before granting access.

// Remember to start your server listening by calling app.listen on your port variable.

// Solution:
/*
// TODO: Write a middleware function that checks if a user has the 'Scientist' role.
function isScientist(req, res, next) {
  console.log(req.params);
  const { roleCapitalized } = req.params;
  // If they do, let them proceed to the Science Lab.
  if (user.role === 'Scientist') {
    next();
  } else {
    res
      .status(403)
      .send('You do not have the required clearance.');
      // .send('Access denied: You do not have the required clearance.');
  }
}

// TODO: Write another middleware function that checks if a user has the 'Engineer' role.
function isEngineer(req, res, next) {
  console.log(req.params);
  const { roleCapitalized } = req.params;
  // If they do, let them proceed to the Engineering Deck.
  if (user.role === 'Engineer') {
    next();
  } else {
    res
      .status(403)
      .send('You do not have the required clearance.');
      // .send('Access denied: You do not have the required clearance.');
  }
}
// These users are trying to go to exclusive areas in the Space Station.
// TODO: Create two routes: /api/scientist for the Science Lab and /api/engineer for the Engineering Deck.
// Verify the user's role using your middleware functions before granting access.
app.get('/api/scientist', isScientist, (req, res) => {
  res.send({ message: 'Welcome to the Science Lab!' });
});
// Verify the user's role using your middleware functions before granting access.
app.get('/api/engineer', isEngineer, (req, res) => {
  res.send({ message: 'Welcome to the Engineering Deck!' });
});

// Remember to start your server listening by calling app.listen on your port variable.
app.listen(port, () => console.log(`Server running on port ${port}`));
*/