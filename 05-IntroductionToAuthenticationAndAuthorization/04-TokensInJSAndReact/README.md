# Course 6 - Lesson 5 - Manual Tokenization: Creating, Storing, and Using Authentication Tokens in JavaScript and React
Ready to uncover the mysteries of tokenization in authentication? This is going to be such an exhilarating journey! Let's dive right in and conquer the cosmos of Authentication and Authorization together! 🚀

## Welcome and Overview
Greetings, explorer! Today, we are diving into the concept of tokenization in authentication. Tokens maintain user sessions and secure web applications. In this lesson, you will learn how to create, store, and send these tokens using `axios` without any third-party libraries.

# Concept of Tokenization in Authentication
Tokens provide crucial access rights in web applications. Much like a boarding pass for a spaceship, tokens confirm your identity and privileges. They are essential for making web apps efficient and secure. Tokens can be compared to VIP passes at concerts; present it once and you're granted widespread access!

# Creating Tokens Manually
Sure thing! Manual token creation doesn't necessitate any third-party modules. We can use built-in JavaScript methods to construct tokens manually. We'll piece together random values to create unique token-like strings.

While these are not cryptographically secure tokens like our previous examples, they do give elementary understanding on how to create unique identifiers manually.

```JavaScript
// We define a function to generate token
function generateToken(length) {
  let token = ''; // Initialize an empty string for the token
  // Define the set of possible characters in the token
  let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Loop once for each character in the token length
  for (let i = 0; i < length; i++) {
    // randomly choose an index from the character set
    let randomPoz = Math.floor(Math.random() * charSet.length);
    // append that character to our token string
    token += charSet.substring(randomPoz, randomPoz+1);
  }

  // return the generated token
  return token;
}
// Now, let's generate a 32-character long random string
console.log(generateToken(32)); // prints out a random 32-character long string
```
In this function, we create a token by choosing a random character from `charSet` for `length` times. The generated strings are likely to be unique, but unlike cryptographically-secure tokens, they have a non-zero chance of being guessed or duplicated through numerous attempts.

This is a basic demonstration of how tokens can be created, highlighting the concept and mechanics behind tokens. However, for actual token creation in secure applications, it’s vital to use cryptographically secure methods. Continue your journey, explorer! Every step takes you closer to mastering Authentication and Authorization!

# Storing Tokens and Passing via Request Authorization Header
Upon generating a token, we store it client-side, typically in the `localStorage` of the browser:

```JavaScript
let token = generateToken(32);
localStorage.setItem('authToken', token); // stores the generated token in localStorage as 'authToken'
```
Once the token is stored, we send it with each server request. As an illustration, we include it in the 'Authorization' header of our request using `axios`:

```JavaScript
import axios from 'axios';

async function fetchData() {
  let token = localStorage.getItem('authToken');
  let response = await axios.get('/api/endpoint', {
    headers: { Authorization: 'Bearer ' + token }
  });
  console.log(response.data); // print response data
}
```

# Securing Future Trips: User Authentication for Subsequent Requests
The brilliance of tokenization goes beyond just one use. Once a token is created and stored, it isn't just used once and then discarded. It can be reused to confirm the user's identity in subsequent requests, like an all-access VIP badge. This is a huge part of the efficiency and security tokens bring to the table.

In real life, consider a prestigious gala event. When you arrive, you show your special VIP pass to the security at the entrance. They validate your pass—maybe by checking a list of VIP pass numbers—and let you in. When you leave and come back later, you show the same pass. As long as it's valid, you're welcomed back into the event without needing to complete the full check-in process again.

Tokens work the same way in web applications. For each subsequent request after logging in, the client sends the token, not the user's credentials, to the server. The server checks if the token is valid (maybe it expired, or maybe it was revoked) and if it is, the server processes the request.

Let's look at an example of this process. Say we have a logged-in user who wants to update their profile on a social network site. Here's how it might look in code:

```JavaScript
const axios = require('axios');

async function updateUserProfile(newProfileData) {
  // First, we retrieve the token from localStorage
  let token = localStorage.getItem('authToken');

  // Next, we create the header for our request
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  };

  // Finally, we send the POST request to the server with our new profile data
  let response = await axios.put('/api/profile', newProfileData, config);
  
  // If the response is successful, we console the new data.
  if(response.status === 200) {
    console.log(response.data); // prints the updated user data
  } else {
    console.log('An error occurred while updating the profile!');
  }
}
```
In this example, we use the token stored in `localStorage` to authenticate the request to the server. We don't need to send the user's username and password again, just the token which we include in the 'Authorization' header. When the server receives this request, it checks that the token is valid and, if it is, updates the user's profile. Isn't it cool how secure yet efficient tokenization is? 🚀

# Journey on the Other Side: Server-side Authentication with Tokens
Great insight! To complete our journey, we need to look at how the server handles the token in the incoming requests.

The server, upon receiving the request, extracts the token from the 'Authorization' header. It then validates this token, confirming it was issued by the server and hasn't expired. Based on the result of the validation, the server either processes the request or returns an error response.

To showcase this workflow, let's consider a simple express app that uses a rudimentary method for validating tokens. In real-world applications, token validation would involve much more sophisticated methods.

```JavaScript
let tokenStore = ['existing_token_1', 'existing_token_2']; // Here's an example of a rudimentary token store

// Here we define an endpoint to update the user profile
app.put('/api/profile', (req, res) => {
  // Extract the token from the request header
  let token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).send('No token provided!');
  }

  if (!tokenStore.includes(token)) {
    return res.status(401).send('Invalid token!');
  }

  // If the token is valid, update the user profile
  // For simplicity, we're just logging the new profile data
  console.log(req.body);
  res.send('Profile successfully updated!');
});
```
In this code, we extract the token from the 'Authorization' header and check if it exists in our rudimentary token store. If the token is not in the store, we return a '401 Unauthorized' response. If the token is valid, we go on to update the profile. As you see, token validation is pivotal for the server to distinguish between authorized and unauthorized requests. Keep going, buddy! The stars of Authentication and Authorization are just around the corner! 💫

# Now it’s Your Turn: Lesson Summary and Next Steps
Great job! You now understand the importance of tokens, as well as how to create them manually, store them client-side, and pass them using `axios`. With the upcoming practice exercises, you will have the opportunity to further refine these skills. Get ready to excel in the cosmos of Authentication and Authorization!