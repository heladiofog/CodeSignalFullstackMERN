import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data); // update state with fetched products
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
