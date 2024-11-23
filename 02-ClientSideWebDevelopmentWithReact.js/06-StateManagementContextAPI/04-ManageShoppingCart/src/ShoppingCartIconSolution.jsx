import { useContext } from 'react';
// TODO: Import the cart context from App.jsx using the appropriate import statement
import { ShoppingCartContext } from 'AppSolution';

function ShoppingCartIcon() {
  // TODO: Use the useContext hook to access the cart items state from the cart context
  const { cart } = useContext(ShoppingCartContext);
  // TODO: Display 'Cart: X items', with X being the number of items in the cart, using items.length
  return (
    <h2>Cart: {cart.length} Items</h2>
  );
}

export default ShoppingCartIcon;
