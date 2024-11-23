const express = require('express');
const app = express();
const port = 5000;

// Mock product data
const products = [
  { name: 'Sneakers', price: 49.99 },
  { name: 'T-Shirt', price: 19.99 },
];

app.get('/api/products', (req, res) => {
  res.json(products); // Sends the list of products as JSON
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
