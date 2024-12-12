const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

let tokenStore = [];

// Can you spot the problem with our tokenization logic?
app.post('/api/login', (req, res) => {
  const token = 'simple_token_' + Math.random().toString(36).substr(2);
  // Solution: store the created token
  // tokenStore.push(token);
  res.json({ authToken: token });
});

app.get('/api/check-spaceship', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('No token provided!');
  }

  const token = authHeader.split(' ')[1];
  if (!tokenStore.includes(token)) {
    return res.status(401).send('Invalid token!');
  }

  res.json({ status: 'Ready for exploration!' });
});

app.listen(5000, () => console.log('Server running on port 5000...'));