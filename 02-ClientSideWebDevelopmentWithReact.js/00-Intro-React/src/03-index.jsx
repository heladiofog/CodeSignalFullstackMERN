/*
Excellent progress, Space Voyager! Now, let's practice embedding JSX into 
JavaScript. Replace the placeholder in the code to greet visitors to our 
spaceship app.
*/
// Deprecated
/*
import ReactDOM from 'react-dom';

// TODO: Create a JSX element that says "Welcome to the Cosmos Explorer!"
const spaceship = ___;

ReactDOM.render(
  spaceship,
  document.getElementById('root')
);
*/

// Solution as suggested at:
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

// TODO: Create a JSX element that says "Welcome to the Cosmos Explorer!"
// const spaceship = ; // TODO
const spaceship = <h1>Welcome to the Cosmos Explorer!</h1>;

root.render(
  spaceship,
  document.getElementById('root')
);