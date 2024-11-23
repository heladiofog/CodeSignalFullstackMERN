# React.js: Fetching and Displaying Data with Axios

## Introduction to Fetching and Rendering Data with Axios
Welcome! Today, we will learn how our React apps can fetch data from servers 
using a library known as **Axios**. Simply put, Axios helps us request information 
from other applications (servers) through APIs or the Application Programming 
Interface.

## Understanding APIs
APIs are sets of guidelines that allow communication between software. They 
often send and receive data in a format called JSON, which stands for JavaScript 
Object Notation. An API response may look like:

```JSON
[
  {
    "id": "412e7655-bcec-44cb-bdf1-9439c357ed04",
    "text": "It's LeviOsa, Not LeviosAr.",
    "authorId": "a9f39c40-b073-11ec-b909-0242ac120002",
    "likesCount": 19
  },
  {
    "id": "1fa34ced-5817-4273-9df8-07dac2c18b3a",
    "text": "A robot may not injure a human being or, through inaction, allow a human being to come to harm",
    "authorId": "382dffad-4988-45c8-912f-c26477ac0d6d",
    "likesCount": 17
  }
]
```

Remember, when working with JSON data from APIs, it might come as an array of 
objects, or sometimes just a single object. 😊 Always check the structure of the 
data you receive and adjust your code accordingly!

You can check the structure of the data returned from the API by going to API 
link in your browser. Try going to "https://api-regional.codesignalcontent.com/posting-application-2/posts/" to inspect the structure of the data we will be 
using in this lesson. You will see that the API returns a JSON object that is an 
array of objects, each object including the keys `id`, `text`, `authorId`, and 
`likesCount`.

## Introduction to Axios
We can fetch data effortlessly by using `Axios`, a library for making HTTP 
requests. You can import `Axios` into your file like so:

```JavaScript
import axios from 'axios';
```
We interact with APIs by sending a `GET` request:

```JavaScript
axios.get('some_api_url').then(response => {
    // Here is the response from the API
    console.log(response.data);
});
```
With `axios.get()`, we communicate with the API, and `.then()` handles the 
response. If there's an error, we catch and handle it:

```JavaScript
axios.get('some_api_url')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```
This code logs an error message if one occurs.

## Displaying API Data in React
Once we have our data, we store it in our component's state and then display it. 
We use the `useState` hook from our previous lessons to store the data, and 
`useEffect` to fetch data when our component loads:

```JavaScript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  // Initialize a state variable 'data' and its update function 'setData'
  const [data, setData] = useState(null);

  useEffect(() => { // Use useEffect to fetch data when component mounts
    axios.get('some_api_url')
      .then(response => setData(response.data)) // Update data state
      .catch(error => console.error('Error:', error)); // Error handling
  }, []);

  // Render the data or 'Loading...' if data hasn't been fetched
  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
      {/* "condition ? expr1 : expr2" notation is similar to the if ... else statement, it returns `expr1` if the condition is true, and `expr2` otherwise */ }
    </div>
  );
}
```

`useEffect` takes in 2 parameters. The first is the code to run, and the 2nd is 
an array of state variables that will trigger the code to run when that state 
variable is changed. If the array is empty, the code runs once when the 
component is first mounted to the DOM.

## Lesson Summary and Practice
Kudos to you! We've learned about APIs, how to use Axios to fetch data, error 
handling, and how to display fetched data in React. Time for some practice to 
solidify what you've learned. You're well on your way to becoming a React wizard!

```
```