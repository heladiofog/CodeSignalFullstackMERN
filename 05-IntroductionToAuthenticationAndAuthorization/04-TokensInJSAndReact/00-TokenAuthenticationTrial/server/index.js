const express = require('express');
const app = express();

app.get('/api/mission-status', (req, res) => {
  let token = req.headers.authorization.split(' ')[1];
  if (token === '12345') {
    res.json({ status: 'Mission ready to launch!' });
  } else {
    res.status(401).send('Mission access denied: Invalid token');
  }
});

app.listen(5000, () => console.log('Server running on port 5000...'));