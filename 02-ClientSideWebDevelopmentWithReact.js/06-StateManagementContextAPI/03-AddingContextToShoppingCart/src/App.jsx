import { useState, useContext, createContext } from 'react';

// Create a context for the online shopping cart
const CartContext = createContext();

function CartStatus() {
  // TODO: Access the 'cart' from our CartContext and return a paragraph with "Items in Cart:" followed by the number of items
}

function App() {
  const [cart] = useState(['apple', 'bread', 'milk']);
  return (
    <CartContext.Provider value={{ cart }}>
      {/* TODO: Render the CartStatus component to display the cart status */}
    </CartContext.Provider>
  );
}

export default App;


// Solution
/*
In AppSolution.jsx fike
*/
