const express = require('express');
const app = express();

const products = [
  { id: 1, name: 'Backpack', price: 49.99 },
  { id: 2, name: 'T-shirt', price: 15.99 },
];

// A route for fetching products
app.get(
  '/api/products',
  // TODO: Send a JSON response with a list of products
  (req, res) => {
    res.json(products);
  }
);

app.listen(5000);
