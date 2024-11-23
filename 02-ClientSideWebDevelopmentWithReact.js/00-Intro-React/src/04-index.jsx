/*
Stellar work so far! Can you update our interstellar marquee to display the 
current Earth date? Apply what you've learned about embedding JavaScript 
expressions in JSX. Also, update the html file to include the root element.
*/
// Deprecated
/*
// import the library needed for rendering the JSX element

const currentDate = new Date().toDateString(); // gets the current date as a string

// TODO: Create a JSX element that represents a paragraph displaying the current date

// TODO: Render the welcome message with today's date in the 'root' element
*/

// Solution as suggested at:
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

// import the library needed for rendering the JSX element
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<App tab="home" />);

const currentDate = new Date().toDateString(); // gets the current date as a string

// TODO: Create a JSX element that represents a paragraph displaying the current date
const displayDate = <p>Current date is: {currentDate}</p>;
// TODO: Render the welcome message with today's date in the 'root' element

root.render(displayDate, document.getElementById('root'));