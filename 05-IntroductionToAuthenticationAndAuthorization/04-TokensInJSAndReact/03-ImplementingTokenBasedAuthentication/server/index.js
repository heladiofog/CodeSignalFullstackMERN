const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;
const tokenStore = ['secretToken1', 'secretToken2'];

// TODO: Set up your login route to send a token back to the client. Don't forget to push it to the token store

// TODO: Set up the secret-data route to validate the token and send secret data

// Solution:
// // TODO: Set up your login route to send a token back to the client. Don't forget to push it to the token store
// app.get('/api/login', (req, res) => {
//   const token = 'simple_token_' + Math.random().toString(36).substr(2);
//   tokenStore.push(token);
//   res.send(token);
// });
// // TODO: Set up the secret-data route to validate the token and send secret data
// app.get('/api/secret-data', (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send('No token provided!');
//   }

//   const token = authHeader.split(' ')[1];
//   if (!tokenStore.includes(token)) {
//     return res.status(401).send('Invalid token!');
//   }

//   res.send('Secret data is coming!');
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
