import { createContext, useState, useContext } from 'react';

const ItemContext = createContext();

function ShoppingCart() {
  const [items, setItems] = useState(['apple', 'bread']);

  return (
    <ItemContext.Provider value={[items, setItems]}>
      {/* Solution */}
    {/* <ItemContext.Provider value={{items, setItems}}> */}
      <ShoppingList />
    </ItemContext.Provider>
  );
}

function ShoppingList() {
  const { items } = useContext(ItemContext);
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
