'use scrict';

const express = require('express');
const app = express();

app.get('/', function(req, resp) {
    resp.send('Hello World\n');
});

app.listen(8080);
console.log("Hello World running!");
