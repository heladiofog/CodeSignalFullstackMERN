# Lesson (unit) 3: Managing Data Flow: Storing and Retrieving Information with Express.js and Node.js

## Learning to Store and Retrieve Data: Data Storage
Think of our server as a library that houses key app data. In this lesson, we 
will learn how to store this data in our server. We'll use `JavaScript` to 
create `JSON` objects, which will store our data in an easily accessible manner. Imagine that we're building a blog app, and we are storing a list of 
blog posts.

```js
const data = {
    posts: [
        { // First blog post
            id: 1,
            title: 'Hello, world!',
            content: 'This is my first blog post.',
        },
        { // Second blog post
            id: 2,
            title: 'Goodbye, world!',
            content: 'This is my last blog post.',
        },
    ]
};
```
Here, our `data` object stores an array of blog post objects. Each post has an 
`id`, `title`, and `content`.

## Learning to Store and Retrieve Data: Data Retrieval
Just as a library retrieves books for you, our server fetches data when 
needed. We use routes in `Express.js` to handle these requests.

```JavaScript
app.get('/api/posts', (req, res) => {
    res.json(data.posts);
});
```
This line instructs the server to respond to a GET request at `/api/posts` 
with the `posts` data in our `data` object.

## Learning to Store and Retrieve Data: Modifying Data
Communicating data between the client and server is a two-way street, not only 
do we need to send data from the server to the client, but we often need to 
update our server-side data based on information received from the client. 
Therefore, we'll see how to modify data on the server based on client-side 
input.

Specifically, we'll use the HTTP `POST` method, which is designed to send data 
in a request to a server.

Imagine a user who wants to add a new blog post. They'd fill in the details on 
our client-side app, which would then package this data and send it over to 
our server using `Axios`. Let's see what the client-side code for this might 
look like:

```JavaScript
const message, setMessage = useState([]);

const newPost = {
    id: 3,
    title: 'Hello, again, world!',
    content: 'This is another blog post.',
}; // The new blog post filled in the form/page

axios.post('/api/posts', newPost).then(response => {
    setMessage(`User ${response.data.user.id} has been successfully added`);
});
```

In this code, we're sending a new `post` to our server using `axios.post()`.
The new post data is included in the request. Once the server receives the 
POST request, it sends back a response to the client with information such as 
if the POST request was successful or not. Here, we see the server’s response 
is `response.data.user.id`.

Let's see how we can set up our server to receive this POST request and add the new post to our data:

```JavaScript
app.post('/api/posts', (req, res) => {
    const newPost = req.body; // retrieving new post from the request
    data.posts.push(newPost); // Adds the new post to our posts data
    res.json(newPost); // Response with the newly added post
});
```

In this code, our server is set up to receive a POST request at the `/api/posts` endpoint. The `req.body` contains the data our client sent - the new post. We then add this new post to our `posts` array and send the newly added post back in the response.

By running the above code, you can now add new posts to your server data through your client app! This prepares you for a bit more realistic handling of server data in your future web development endeavors.

## Lesson Summary
Congratulations! You have successfully tackled data handling with 
`Express.js.`. You now understand how to set up your server to store data, how 
to fetch and modify this data upon a client request, and how to use Axios to 
handle GET and POST requests. Now, undertake the exercises to test your new 
skills. Keep practicing, and preserve your journey toward becoming a seasoned 
web developer!

```
```
