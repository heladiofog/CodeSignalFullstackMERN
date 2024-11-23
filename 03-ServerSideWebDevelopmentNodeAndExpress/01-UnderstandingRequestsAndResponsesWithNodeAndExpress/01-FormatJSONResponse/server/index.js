const express = require('express');
const app = express();

app.get('/api/product', (req, res) => {
  res.send('Space Boots'); // Sending a product name from the endpoint
  // Solution:
  // res.json({name: 'Space Boots'}); // Sending a JSON product name from the endpoint
});

app.listen(5000);
