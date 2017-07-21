//Main starting point of the application.

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express(); //instance of express
const router = require('./router');
const mongoose = require('mongoose');
//DB setup
mongoose.connect('mongodb://localhost:/todo-app6');

//App Setup
app.use(bodyParser.json({type:'*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on :', port);