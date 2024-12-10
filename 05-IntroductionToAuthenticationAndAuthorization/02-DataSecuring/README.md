# Course 6 - Lesson 3 - Securing the Universe of User Data: Unveiling Password Security, Hashing, Encryption, and bcrypt Implementation
We're getting into the heart of authentication now! 👨‍🚀 Buckle up and let me know if there's anything you need help with.

## Introduction to Securing User Data
Hello, programming friends! Are you prepared to delve deep into the realm of secure user data? This particular lesson underscores the importance of password security in safeguarding user data. It covers essential concepts including `hashing`, `encryption`, and the use of `bcrypt` for password encryption. Buckle up! By the end of our exciting journey, you will have mastered the use of `bcrypt` for password security.

Imagine this scenario. You are storing user data, such as a username and a password, in your database. Suddenly, an uninvited guest (an attacker) gains access to this data. These pieces of information, as innocuous as they may seem, can provide an attacker with significant insights about their target, leading to misuse or unauthorized access. So, how can we prevent this? By securing user data, of course!

## User Data and Its Importance. Hashing vs. Encryption
User data often includes unique identifiers like a username or email and a password for authentication. This data is critical - if it falls into the wrong hands, someone could commit unauthorized activities. It's like a library card system: if an intruder gains access to a user's library card number and password, they could misuse the information, leading to unauthorized checkouts.

Passwords are central to securing user accounts. Weak passwords like '12345' or 'password' offer easy access to attackers. Hence, robust passwords are endorsed, typically at least 12 characters mixed with uppercase, lowercase, numbers, and symbols. For instance, 'My$3cur3Pa$$w0rd!' offers better security than '12345'.

To store passwords securely, we employ hashing and encryption rather than plain texts. Encryption changes plain text into cipher text using an encryption key, which can be decrypted using a decryption key. In contrast, hashing is irreversible. It processes input into a fixed byte size, like blending fruits for a smoothie where retrieving the original pieces is impossible. Hashing obeys the same rule.

## Introduction to bcrypt
`Bcrypt`, a password-hashing function created by Niels Provos and David Mazières, adds an extra layer of security to our data. Bcrypt applies both **salt** and **hash** techniques on passwords, enhancing their security.

In JavaScript, `bcrypt` uses an asynchronous API with native promises to hash passwords. We hash a password using the `bcrypt.hash()` function and check a password against a hash using the `bcrypt.compare()` function.

Here's a direct example of using the bcrypt.hash() function:

```JavaScript
const password = 'My$3cur3Pa$$w0rd!';
const saltRounds = 10;

try {
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
      throw new Error('Hashing Failed');
    }
    console.log(hash);
  });
} catch (err) {
  console.error(err.message);
}
```
Let's dwell a little deeper into the `bcrypt.hash()` function. It accepts three parameters:

1. `password`: This is the plain-text password that you want to hash.

2. `saltRounds`: This is the number of rounds you want to process the data for. More rounds lead to more secured hashed data but require more processing time. A **balance between security and performance is usually maintained at around ten rounds**.

3. `callback`: This function gets executed once bcrypt has hashed the password. It should accept two arguments:

  - `error`: An error object if an error occurred, `null` otherwise.
  - `hash`: If no error occurred, this is the hashed password.

## Implementing bcrypt for Password Security
We move now to the verification part with `bcrypt.compare()`. Here, errors can be handled by examining the `err` parameter in the callback function. If `err` is not `null`, an error has occurred during the hash comparison.

```JavaScript
const passwordAttempt = 'TryingToGuessPassword';

bcrypt.compare(passwordAttempt, hash, function(err, isMatch) {
    if (err) {
      throw new Error('Comparison failed!');
    } else if (!isMatch) {
      console.log("Password doesn't match!");
    } else {
      console.log("Password matches!");
    }
});
```
In this script, `passwordAttempt` refers to the password we want to check, and `hash` is the user's hashed password from the database. `isMatch` will be either `true` or `false`, indicating whether the password and hash match.

## Beefing Up Security with Middleware: Hashing Passwords in Signup and Login Routes
Middlewares refer to functions that have access to the request object, the response object, and the `next` middleware function in the application's request-response cycle. They can execute any code, make changes to the request-response objects, end the request-response cycle, and call the next middleware function in the stack.

With the help of middlewares, we can add an extra layer of security to our application by hashing the passwords when users sign up or log in. Let's explore how!

First, we'll define a middleware function for password hashing:

```JavaScript
function hashPassword(req, res, next){
  const saltRounds = 10;

  // hash the password
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      // store the hashed password to the request body
      req.body.password = hash;
      // move to the next middleware function/route handler
      next();
    }
  });
}
```
This `hashPassword` middleware hashes the password from the request body and replaces the original password in the request body with the hashed password. If an error occurs during hashing, it will send a 500 status code.

Now, we will create the signup and login routes. We'll be storing the user data in a hardcoded object for simplicity. In your actual applications, this data will be stored in a database instead.

```JavaScript
// Hardcoded user data
let users = {};

// Signup route
app.post('/signup', hashPassword, function(req, res) {
  const { username, password } = req.body;
  
  // Check if the username is already taken
  if (users[username]) {
    res.status(409).send('Username is already taken!');
  } else {
    // Save the user data
    users[username] = { password };
    res.status(200).send('User created successfully!');
  }
});

// Login Route
app.post('/login', function(req, res) {
  const { username, password } = req.body;
  
  // Find the user in our hardcoded data
  let user = users[username];
  
  if (user) {
    // Compare the hash and respond
    bcrypt.compare(password, user.password, function(err, match) {
      if (err) {
        res.status(500).send();
      } else if (match) {
        res.status(200).send('Login successful!');
      } else {
        res.status(401).send('Password is incorrect!');
      }
    });
  } else {
    res.status(404).send('User not found!');
  }
});
```
The **signup route** uses the `hashPassword` middleware to hash the password before saving the user data. The **login route** checks the username and password, compares the hashed password with the entered password, and sends the appropriate response.

And voila! You now know how to use middlewares in Express.js to provide an extra layer of security by hashing passwords! Remember, `bcrypt` comes pre-installed in most CodeSignal environments. However, learning to do it is crucial for working on your own projects or other environments.

## Lesson Summary and Practice Announcement
Bravo! You've navigated the sea of user data, grasped the importance of password security, unearthed the secrets of hashing and encryption, and wielded `bcrypt` for password security.

Up next, we will use the tools we've acquired to build something tangible in the form of practice sessions. These exercises will test your understanding and help you tackle real-world data security problems. Let's roll up our sleeves and dive into some coding!

