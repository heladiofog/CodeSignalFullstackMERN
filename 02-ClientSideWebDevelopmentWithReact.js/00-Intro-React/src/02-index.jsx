/*
Hello again, Galactic Pioneer! We've encountered a snag on our dashboard 
control panel. Can you check the source code and fix it so that our message is 
displayed correctly?
*/
// Depprecated
/*
import ReactDOM from 'react-dom';

const elementStyle = {
  color: 'blue'
};

const planetElement = <h1 style=elementStyle>Welcome to my Space Adventure!</h1>;

ReactDOM.render(
  planetElement,
  document.getElementById('root')
);
*/

// Solution as suggested at:
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

const elementStyle = {
  color: 'blue'
};

const planetElement = <h1 style={elementStyle}>Welcome to my Space Adventure!</h1>;

// ReactDOM.render(getTitle(), document.getElementById('root'));
// root.render(<getTitle />);
root.render(planetElement);
