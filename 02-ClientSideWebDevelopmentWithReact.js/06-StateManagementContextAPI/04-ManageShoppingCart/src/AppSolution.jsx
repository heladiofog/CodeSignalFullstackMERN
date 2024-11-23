import { createContext, useState } from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

// TODO: Use createContext to create a new context for the shopping cart state
export const ShoppingCartContext = createContext();

function App() {
  // TODO: Use the useState hook to set up the initial state for the cart items with 'apple' and 'banana' as default values
  const [cart, setCart] = useState(['apple', 'banana']);
  
  // TODO: Return a provider component that includes the ShoppingCartIcon and provides the cart items state to its descendants
  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {/* TODO: Render the ShoppingCartIcon component to display the sopping cart status */}
      <ShoppingCartIcon />
    </ShoppingCartContext.Provider>
  );
}


export default App;
