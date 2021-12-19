const express = require('express');
const connectionManager = require('./dbcon.js');
const route = require('./routes/index');

const app = express();

const port = 3000 || process.env.PORT;

app.use('/', route);

connectionManager();
console.log('Database connected');


app.listen(port,() => console.log(`App is running on ${port}`));