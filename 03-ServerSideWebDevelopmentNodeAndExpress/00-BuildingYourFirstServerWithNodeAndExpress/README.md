# Server-side Web Development with Node.js and Express.js
Explore the galaxy of server-side programming with Node.js and Express.js in a 
course packed with exciting backend adventures. Take another step to becoming a 
**Full-Stack Engineer**.

## Introducing Node.js
Welcome! Let's embark on a journey into server-side programming, starting with 
Node.js.

Before we pound the pavement, let's briefly define two core terms of web 
communication: **server** and **client**. You can think of the server as a 
chef - it prepares (serves) data or information. The client, on the other hand, 
is like a restaurant guest - it requests and receives this information and 
renders it on the web page. Together, they carry out web interactions.

Now, back to `Node.js`. So, what exactly is Node.js? It's a JavaScript runtime 
built on Chrome's V8 JavaScript engine, which allows you to run JavaScript on 
your computer. In other words, **it enables you to use JavaScript outside of a 
browser! With Node.js, you can interact with your computer's file system much as 
you would with other server-side languages such as PHP or Python**.

## Dancing with Express.js
Next, let's explore `Express.js`. It's a flexible Node.js web application framework 
that offers a robust set of features for web and mobile applications. Although 
the name might sound intimidating, rest assured that it's a user-friendly library.

`Express.js` enables us to manage everything, from API routes to requests and 
views. It's incredibly adaptable and pluggable, providing everything we need 
straight out of the box.

To use `Express.js` in your application, just require the "express" module in a 
Node.js file as shown below:

```JavaScript
const express = require('express');
```

## Building Our Simple Server
With Node.js and Express.js at the ready, let's proceed and create a simple 
server. Here's a piece of code that constructs a server that responds with 
`"Hello World!"` to all requests:

```JavaScript
const express = require('express'); // importing Express.js
const app = express(); // Instantiating Express.js app server instance
const port = 5000; // The server will be listening on port 5000

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

This code starts by requiring the `express` module to use Express.js. We then 
create an instance of Express by calling the `express()` function, which returns 
our `app`. The `app` object possesses several methods, one of which is the `get()` 
method, which defines a route handler for HTTP GET requests. In this case, we 
are defining a route handler for the root path (`'/'`) that responds with the 
string `"Hello World!"` whenever it receives a GET request. Finally, we start 
our server on the defined port by calling the `listen()` method on our `app`.

When the server is started (it happens automatically when the task is opened in 
CodeSignal IDE), the message `"Example app listening at http://localhost:5000"` 
should appear. This signifies that your server is operational and listening on 
port 5000.

**Note**: A port is simply the location that our server is expecting to receive 
requests from. Similar to how you might expect to get files from a USB port on 
your computer or receive audio from a headphone port.

## Connecting to a React App
Now that our server is up and running let's establish a connection to our React 
app to get a full-stack application (frontend + backend). This can be achieved by sending a GET request to our server's endpoint (`http://localhost:5000/api`) 
using a library named `Axios`. Here's how to set it up:

```JavaScript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // We don't specify `localhost:5000`, as it's already configured in CodeSignal's IDE
  useEffect(() => axios.get('/api').then(response => {
    setData(response.data);
  }), []);

  return (
    <div>
      {data ? 
        <div>{data}</div> : 
        <div>Loading...</div>
      }
    </div>
  );
};

export default App;
```

This code initiates a GET request to our server and shows the response data on 
the page. If you incorporate this code into a React component and launch your 
React `app`, the phrase `"Hello World!"` should appear on your page. That's how 
you connect a server to a React app!

## Lesson Summary
Congratulations! You've just created your first server with `Node.js` and 
`Express.js` and learned how to connect this server to a React app. Today, we've 
dipped our toes into the captivating world of server-side development, utilizing 
some powerful tools.

Remember, practicing what you've learned is an excellent way to reinforce these 
concepts, so expect some hands-on exercises in our next session. Good luck, and 
keep coding!

```
```