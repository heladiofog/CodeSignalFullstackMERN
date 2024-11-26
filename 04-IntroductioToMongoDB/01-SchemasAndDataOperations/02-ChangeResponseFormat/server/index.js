const express = require('express');
const app = express();

app.get('/api/welcome', (req, res) => {
    res.send({ message: 'Welcome to our Online Shopping Platform!' }); // Look out! "res.send()" should send a string, not an object.
    // Solution:
    res.send('Welcome to our Online Shopping Platform!'); // Look out! "res.send()" should send a string, not an object.
});

app.listen(5000);