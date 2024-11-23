# Exploring Components and Props in React.js

## Course Overview
Hello there! Today's voyage sails into the realm of React.js components. For 
clarity, here's an analogy - if React.js were a car, components would be the 
wheels, seats, and engine that allow it to function. We'll gain more insight 
into what components are, their types - namely, *functional components* and 
*class  components*, and how to pass data between them using `props`.

## Understanding Components
Consider React.js as a robot. Each part, such as the head, arms, legs, or body - 
each is a component. Now, a component in React.js can be a simple button, a 
complex form, or an entire section of a webpage.

React offers two ways to create components: functional and class components.

## Functional Components
Functional components are JavaScript functions that return JSX. Here's an 
example of a functional component:

```JavaScript
// This is a functional component called Greeting
function Greeting() {
  return <h1>Hello, JavaScript!</h1>; 
}
```

This component returns a welcome message to JavaScript.

## Class Components
In React, you can define components using classes. These are referred to as 
class components. They make use of ES6 classes and extend from the 
`React.Component` base class. Here's how we could define the previous `Greeting` 
component as a class component:

```JavaScript
import React from 'react'; // importing React to use React.Component;

// Defining Greeting as a class component
class Greeting extends React.Component {
  render() {
    return <h1>Hello, JavaScript!</h1>; 
  }
}
```

This class `Greeting` contains a `render` method that returns the same greeting 
as the functional component.

Class components are more sophisticated than the functional components. Modern 
React recommends using functional components over class components for most use 
cases.

## Usage
Once you create the component, you can use it in your JSX code by `<Greeting />` 
notation. For instance, to render the `Greeting` component, use:

```JavaScript
ReactDOM.render(<Greeting />, document.getElementById('root'));
```

## The App Component and Importing Components
Usually, a React application has a parent or main component named `App`. It acts 
as the primary component where all other components branch off.

In most applications, components are defined in their own separate files for 
better code organization. To use these components in a different file, you need 
to import them.

Let's assume that the HTML file is linked to an `index.jsx` file. From this 
`index.jsx` file, React renders the `App` component. The `App` component is defined within its own file, called `App.jsx`. With this setup, we have:

In `index.jsx`:
```JavaScript
import ReactDOM from 'react-dom';
import App from './App';  // Here we're importing the App component from the App.jsx file

ReactDOM.render(<App />, document.getElementById('root'));
```

And in `App.jsx`, we define our `App` component:

```JavaScript
// This is our main or App component
function App() {
  return (
    <div>
      <h1>Welcome to React.js!</h1>
    </div>
  );
}

export default App;
```

Here, `export default App;` allows us to import the `App` component in a 
different file.

## Break it Down with Props
Props, short for properties, serve as a conduit between parent and child 
components, allowing data to flow down the component tree. Here's how they work:

```JavaScript
// This is a functional component called Greeting
function Greeting(props) {  // props is an object containing properties passed down from a parent component
  const greeting = {
    'English': 'Hello',
    'Spanish': 'Hola',
    'French': 'Bonjour'
  };

  return <h1>{greeting[props.language]}, {props.name}!</h1>; 
}

// We are passing the props 'name' as 'JavaScript' and 'language' as 'English'
ReactDOM.render(
  <Greeting name="JavaScript" language="English" />,
  document.getElementById('root')
);
```
In this example, the `Greeting` component receives `name` and `language` props 
and uses them to display a greeting. The greeting message changes based on the 
`language` prop, generating different greeting messages for different languages.

Alternatively, you can make use of ES6's destructuring feature to extract the 
`name` and `language` props directly:

```JavaScript
// This is a functional component called Greeting with props destructured
function Greeting({name, language}) {  // destructuring props directly in the function's parameters
  const greeting = {
    'English': 'Hello',
    'Spanish': 'Hola',
    'French': 'Bonjour'
  };

  return <h1>{greeting[language]}, {name}!</h1>; 
}

// We are passing the props 'name' as 'JavaScript' and 'language' as 'English'
ReactDOM.render(
  <Greeting name="JavaScript" language="English" />,
  document.getElementById('root')
);
```

By utilizing props, we can create components that are versatile and reusable as 
the data they deal with can be altered just by passing different props, thus 
enabling components to generate diverse outputs.

## Lesson Summary and Practice
Today, we've learned about components, the differences between functional and 
class components, the `App` component, and props. We'll reinforce these concepts 
with hands-on practice. In the next lesson, we'll learn about the concept of 
"state" in React. See you then!

```
```