import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [productName, setProductName] = useState('');

  useEffect(() => {
    axios.get('/api/product').then((response) => {
      setProductName(response.data);
      // solution
      //setProductName(response.data.name);
    });
  }, []);

  return <div>{productName}</div>;
}

export default App;
