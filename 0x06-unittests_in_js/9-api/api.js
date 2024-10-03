/** Regex integration testing */
const express = require('express');

const app = express();
const port = 7865;

app.get('/cart/:id([0-9]+)', (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;
