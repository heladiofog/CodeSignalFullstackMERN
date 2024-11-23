const express = require('express');
const app = express();
app.use(express.json());

let posts = [
  { id: 1, text: 'Hello, CodeSignal' },
  { id: 2, text: 'Hello, World!' },
  { id: 3, text: 'Bye, CodeSignal' },
  { id: 4, text: 'Bye, full-stack app' },
];

app.get('/api/posts', (req, res) => res.json(posts));

app.delete('/api/posts/:id', (req, res) => {
  const index = posts.findIndex((post) => post.id === Number(req.params.id));
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    res.json(deletedPost);
  } else {
    res.sendStatus(404);
  }
  // Solution: Remove id logic ...pfff...
  /* if (posts.length) {
    const deletedPost = posts.shift();
    res.json(deletedPost);
  } else {
    res.sendStatus(404);
  } */
});

app.listen(5000, () => console.log('App listening on port 5000'));
