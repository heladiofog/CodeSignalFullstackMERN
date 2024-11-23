const express = require('express');
const app = express();

app.get('/api/robotics', (req, res) => {
  try {
    throw new Error('Component not found'); // Simulating an error
  } catch (err) {
    res.status(500).json({ error: 'Robotic server malfunction' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
