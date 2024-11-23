const express = require('express');
const app = express();
app.use(express.json());

let comments = [{ id: 1, text: 'Good post!', postId: 1 }];

// TODO: create a GET route /api/posts/:id/comments to retrieve all comments for a given post.
// TODO: create a POST route /api/posts/:id/comments to add a new comment to a post.

// Solution
/*
// TODO: create a GET route /api/posts/:id/comments to retrieve all comments for a given post.
app.get('/api/posts/:id/comments', (req, res) => {
  const postComments = comments.filter(
    (comment) => comment.postId == req.params.id
  );
  //console.log(postComments);
  res.json(postComments);
});

// TODO: create a POST route /api/posts/:id/comments to add a new comment to a post.
app.post('/api/posts/:id/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,
    postId: req.params.id
  };
  comments.push(newComment);
  res.json({ success: true });
});
*/
app.listen(5000, () => console.log('Server listening on port 5000'));
