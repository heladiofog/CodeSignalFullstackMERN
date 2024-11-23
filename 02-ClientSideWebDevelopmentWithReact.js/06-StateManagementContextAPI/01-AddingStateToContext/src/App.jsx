import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export default function App() {
  const [items, setItems] = useState(['Apple', 'Banana']);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <ShoppingCart />
    </CartContext.Provider>
  );
}

function ShoppingCart() {
  const { items } = useContext(CartContext);
  return <div>Cart has {items.length} items.</div>;
}

// Solution:
/**
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export default function App() {
  const [items, setItems] = useState(['Apple', 'Banana']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <CartContext.Provider value={{ items, setItems, isCartOpen, setIsCartOpen }}>
      <ShoppingCart />
    </CartContext.Provider>
  );
}

function ShoppingCart() {
  const { items, isCartOpen } = useContext(CartContext);
  return (
    <div>
      Cart has {items.length} items.
      <p>Is cart open: {isCartOpen ? 'Sí' : ' No'}</p>
    </div>
  );
}
 */