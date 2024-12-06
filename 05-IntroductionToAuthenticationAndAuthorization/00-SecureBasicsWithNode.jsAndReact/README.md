# Course 6 - Lesson 1: Introduction to Authentication and Authorization
Dive into the world of Authentication and Authorization with this introductory course on web security. Understand and practice how to secure your applications and protect against common security threats.

Fantastic! Today, we're diving deep into the galaxy of authentication and authorization. This is going to be an exciting journey. I'll be right here if you need any help! 🚀

## Overview and Goals
Welcome, seeker of code wisdom! In today's lesson, we will unveil the secrets of authentication and authorization. We will elucidate these security protocols, construct a basic authentication system with `Node`, and guide you in creating an engaging login page using `React`.

## Basics of Authentication and Authorization
Join us as we unravel the intricacies of authentication and authorization. Consider them as sentinels of a fortress—authentication verifies the user's identity, it's akin to a sentry poised with the question: "Who goes there?" Conversely, authorization, acting much like a gatekeeper, determines: "What can you do here?" These security precautions cast their protective aura over every virtual transaction, ranging from accessing a library to operating a banking application.

## Importance of Authentication and Authorization
To ensure the safety of the data realm, authentication and authorization combine their strengths to form an impregnable fortress. Imagine a banking system where anyone could waltz right in and claim they are the king! It's these qualitative security layers that prevent such chaos. The system, acting much like a bank sentry, authenticates users by verifying their identity, then authorizes services according to the user's account type, ensuring only rightful access to resources.

## Creating Basic Authentication in a Node Server
The magic of `Node.js`, a humble server-side scripting JavaScript runtime, awaits us! By harnessing the power of JavaScript, we will conjure up a basic authentication system. Our hard-coded user data will manifest, similar to a parchment holding a simple spell!

```JavaScript
// Import libraries and prepare for incantations
const express = require("express");
const app = express();
app.use(express.json());

// Hardcoded user in our enchanted script
const user = {id: "1", username: "admin", password: "admin"};

// The spell, the sentry, and the gatekeeper
app.post("/login", (req, res) => {
  const {username, password} = req.body;
  
  // A simple incantation of authentication
  if (username === user.username && password === user.password) {
    res.status(200).send("Login successful");
  } else {
    // Oops! The spell failed
    res.status(401).send("Invalid username or password");
  }
});

// Invoke the server
app.listen(3000, () => console.log("Server is humming..."));
```
In the code spell above, our server eagerly awaits a `POST` bearing secret passcodes—a login and password. Upon successful authentication, the server responds with "Login successful". Congratulations, we have built a foundation!

## Creating the User Login Page in React
Let’s fashion a straightforward login form in React as the main client-side component that connects us to the authentication gateways of the backend.

```JavaScript
function LoginForm() {
  const [details, setDetails] = useState({email:"", password:""}); // The humble beginnings of form data

  // Behold the birth of the login form
  return (
    <form onSubmit={submitHandler}>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
    </div>
    <input type="submit" value="LOGIN" />
    </form>
  );
}
```
For a better user experience, we should include user-friendly prompts and informative validation error messages in both forms. But for now, let's keep things simple as this is an introductory lesson.

## Sending POST Requests to Login Route
After crafting our login form, we need to handle form submissions. We want to send a POST request with our form data to the server when a user clicks the submit button. But how do we make this happen?

We're going to make our `submitHandler` function more complex, by initiating a POST request to our previously defined login endpoint at the server. To help us with this, we'll use Fetch API — a built-in JavaScript library for making HTTP requests.

Here's the updated `LoginForm` with the fetch logic included:

```JavaScript
function LoginForm() {
  const [details, setDetails] = useState({username:"", password:""});

  const submitHandler = e => {
    e.preventDefault(); // Prevent page refresh

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // Rest of the LoginForm component...
}
```
In the `submitHandler` function, we're using the `fetch()` function to send a POST request to the login endpoint. We've set the method to `'POST'` to indicate the type of HTTP request, and included headers to define the format of the request body.

The request body (`body`) is where we include our form data (`details`), which is stringified before sending. This way, we can smoothly send our email and password data to the server for authentication!

The `fetch` function returns a `Promise` that resolves to the `Response` to that request. To handle the response and convert it to text, we call `response.text()`.

With this, you have successfully linked your login form with your backend server! The data entered in the form will now be sent to the server for authentication when the form is submitted. It's just like handing your ticket to the museum staff to get access to the fabulous exhibits inside!

## Lesson Summary and Practice
Bravo! You've embarked on the authentication and authorization journey, erected a basic authentication system in `Node.js`, and traversed time to shape a login form in `React`! These fundamental elements, my valiant learners, serve as the foundation of the grand palace of knowledge awaiting your exploration. Ahead lie practice exercises to manifest your theoretical knowledge into hands-on mastery. Seize this opportunity to delve deeper into these concepts, tie them to concrete tasks, and watch the fundamental aspects bloom into powerful tools of application security. Forward, to the further heights and deeper valleys of the coding realm! Happy coding!

```
```
