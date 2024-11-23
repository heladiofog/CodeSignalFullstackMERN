const express = require('express');
// TODO: Create an instance of the express application

const products = [
  { name: 'Laptop' },
  { name: 'Smartphone' },
  { name: 'Headphones' },
];

// TODO: Define a route for the '/api/products' GET request that sends back a list of products

// TODO: Start the Express server on port 5000

// Solution:
/*
const express = require('express');
// TODO: Create an instance of the express application
const app = express();
const PORT = 5000;  // as required

const products = [
  { name: 'Laptop' },
  { name: 'Smartphone' },
  { name: 'Headphones' }
];

// TODO: Define a route for the '/api/products' GET request that sends back a list of products
app.get('/api/products', (req, res) => {
  res.json(products);
});
// TODO: Start the Express server on port 5000
app.listen(PORT);
*/
