const express = require('express');
const app = express();

app.route('/')
    .get((req, res, next) => {
        return res.send('Hello, world. I am App1.');
    });

app.listen(80, (err) => {
    if (err) {
        throw err;
    }
    console.log('App is listening on port 80.');
});
