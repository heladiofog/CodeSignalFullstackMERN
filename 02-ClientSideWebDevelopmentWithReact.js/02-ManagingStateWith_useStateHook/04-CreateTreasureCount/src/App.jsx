/*
Great job, Space Voyager! Now it's time to consolidate what you've learned by 
writing a React component from scratch. Create a component that keeps count of 
the treasures you discover on your journey. Whenever you click a button, it 
should increase your treasure count. Remember to use what you've learned about 
states and the useState hook.
*/
import { useState } from 'react';

// TODO: Create a TreasureCounter component that tracks the number of treasures found
// TODO: Initialize a state variable 'treasures' that starts at 0
// TODO: Write the JSX that displays the treasure count and a button that increases the count
// TODO: Define the button's onClick event handler to increase the treasure count
// Remember to export your TreasureCounter component at the end!

// Solution:
import { useState } from 'react';

// TODO: Create a TreasureCounter component that tracks the number of treasures found
function TreasureCounter() {
  // TODO: Initialize a state variable 'treasures' that starts at 0
  const [count, setCount] = useState(0);

  // TODO: Write the JSX that displays the treasure count and a button that increases the count
  return (
    <>
      <div>Treasure count: {count}!</div>
      {/* // TODO: Define the button's onClick event handler to increase the */}
      treasure count
      <button onClick={() => setCount(count + 1)}>Treasure found</button>
    </>
  );
}
// Remember to export your TreasureCounter component at the end!
export default TreasureCounter;