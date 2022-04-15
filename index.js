const express = require('express'),
  app = express(),
	 mysql = require('mysql'),
  cors = require('cors'),
  bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
// make server object that contain port property and the value for our server.
var server = {
  port: 3000
};

db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'simpleapi'
})

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter);
// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
