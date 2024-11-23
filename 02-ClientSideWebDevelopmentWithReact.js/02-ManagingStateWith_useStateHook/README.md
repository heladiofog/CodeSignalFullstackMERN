# React.js Fundamentals: Managing State with useStateHook

## Course OverviewIntroduction
Hello! Today, we will be unlocking our mastery over states in React.js. Imagine 
a weather app tracking the changing weather—that's a state in React.js.


## Understanding States in React.js
A state in React.js is similar to memory. It's knowledge stored by a component 
and can change over time. States can be either mutable (changeable) or immutable 
(unchangeable). Consider a game app where your score (state) starts at `0` and 
increases by `1` with each point:

```JavaScript
import { useState } from 'react';

// ScoreCounter Component
function ScoreCounter() {
  // Score counter starts from 0
  const [score, setScore] = useState(0);

  return (
    <div>
      {/* displaying the score */}
      <p>Your score: {score}</p>
      {/* onclick of 'Score' button, 
          the score will increase by one */}
      <button onClick={() => setScore(score + 1)}> Score!</button>
    </div>
  );
}

export default ScoreCounter;
```

The `score` is our state, and we use `setScore` to update it. In the code above, 
the `setScore` function increases the `score` each time the Score button is clicked.

## Introducing useState Hook
Now, let's look closer at the `useState` hook. React hooks allow us to use React 
features within functional components. The `useState` hook enables us to create 
state variables. Consider the following snippet:

```JavaScript
const [score, setScore] = useState(0);
```

`useState(0)` initializes our state variable `score` to `0`. It's our initial 
state. In an online game, each player's initial score would be `0`.

This `useState` hook returns an array with two entries: the current state 
(`score`) and a function to update it (`setScore`). We're using JavaScript's 
**array destructuring** to assign names to them. The `setScore` function lets 
us change the current `score`.

## Using useState Hook with Various Event Listeners
We can harness the `useState` hook with different types of event listeners to 
create more interactive components. Let's look at an example where the color of 
a div box changes every time a mouse hovers over it:

```JavaScript
import { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('red');

  return (
    <div 
      style={{ backgroundColor: color, height: '200px', width: '200px'}}
      onMouseOver={() => setColor('blue')}
      onMouseOut={() => setColor('red')}>
    </div>
  );
}

export default ColorChanger;
```
In this code, when the mouse hovers over the `div` (`onMouseOver`), the 
background color changes to blue, and it returns to red when the mouse pointer 
is moved away (`onMouseOut`).

## Using `useState` with Complex Datatypes
Beyond numbers and strings, `useState` can handle complex datatypes like objects 
and arrays. For instance, if we have a state variable that's an object and we 
want to update a property in the object without changing the others, we need to 
do that manually since `useState` doesn't automatically merge the old and new 
states. Let's see:

```JavaScript
import { useState } from 'react';

function ProfileUpdater() { 
  // creating a state variable profile with two properties
  const [profile, setProfile] = useState({name: "John", age: 25});

  const handleBirthday = () => {
    // updating age while keeping the name the same
    setProfile(currentProfile => ({...currentProfile, age: currentProfile.age + 1}));
  };

  return (
    <div>
      <h2>Name: {profile.name}</h2>
      <h2>Age: {profile.age}</h2>
      <button onClick={handleBirthday}>Happy Birthday!</button>
    </div>
  );
}

export default ProfileUpdater;
```

In this component, when the 'Happy Birthday!' `button` is clicked, the 
`handleBirthday` function is called, which updates the `age` property of 
`profile` while leaving the `name` property the same.

## Lesson Summary and Practice
Well done! You've navigated through the terrain of states in React. You've seen 
how to manage these using the `useState` hook and how to use complex datatypes 
with it. Up next are practice exercises to strengthen these concepts. Keep 
practicing, and let's create some amazing things with React.js! 🚀


```
```