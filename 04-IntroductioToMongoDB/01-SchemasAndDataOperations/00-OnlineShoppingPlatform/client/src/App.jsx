import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data); // Updates the products state with data from the server
    });
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
