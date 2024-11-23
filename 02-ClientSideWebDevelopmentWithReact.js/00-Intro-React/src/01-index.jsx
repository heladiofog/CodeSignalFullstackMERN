/*
Stellar Navigator, let's make your welcome message dynamic! Change the starter 
code to include your title, "Space Explorer," in the welcome message. Define the 
title as a variable, and use it within the JSX.
*/
// Depprecated
/*
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>Hello, welcome to my personal portfolio website!</div>,
  document.getElementById('root')
);
*/

// Solutio as suggested at:
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

function getTitle() {
  // const title = ''; // Add your title here, for example "Space Explorer"
  const title = 'Space Explorer'; // Add your title here, for example "Space Explorer"
  return <h2>Welcome, {title}, to My Portfolio Website!</h2>;
}

// ReactDOM.render(getTitle(), document.getElementById('root'));
// root.render(<getTitle />);
root.render(getTitle());
