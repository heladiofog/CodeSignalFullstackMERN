/*
Fantastic progress, Space Voyager! Now, conjure up a Health Bar for our game. 
Start by setting the initial health, and then ensure that the bar visually 
represents this health.
*/
import { useState } from 'react';

function HealthBar() {
  // TODO: Initialize the health state to represent the player's health at the start of the game.
  // TODO: Create a div styled as a green bar to represent the current health. The width of the bar should match the health.
}

// Solution:
/*
function HealthBar() {
  // TODO: Initialize the health state to represent the player's health at the start of the game.
  const [health, setHealth] = useState(80);
  const titleStyles = {
    color: "green",
    padding: "10px"
  };
  const healthBarStyles = {
    color: "yellow",
    backgroundColor: "green",
    width: `${health}%`,
    border: "1px solid",
  };
  // TODO: Create a div styled as a green bar to represent the current health. The width of the bar should match the health.
  return (
    <>
      <h1 style={titleStyles}>Health is {health}!</h1>
      <div style={healthBarStyles}>health</div>
    </>
  );
}

*/
export default HealthBar;
