const express = require('express');
const app = express();

const data = {
  posts: [
    { id: 1, title: 'Hello, world!', content: 'This is my first blog post.' },
    { id: 2, title: 'Goodbye, world!', content: 'This is my last blog post.' },
  ],
};

app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json(data.posts);
});

// TODO: Implement POST request handling. The server should receive a new post from the client, add it to 'data.posts', and send the added post in the response.

// Solution
// function onSubmit(e) {
//   e.preventDefault();
//   axios.post('/api/posts', newBloggedUser)
//     .then((response) => setMessage(`Blog post successfully created id: ${response.data.id} with the title: ${response.data.title}`))
//     .catch(error => setMessage(error.message));
// }

app.listen(5000, () => console.log('Server listening on port 5000'));
