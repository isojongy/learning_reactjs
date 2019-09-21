var express = require('express');
var path = require('path');
var session = require('express-session');

var app = express();
app.use(express.static(path.join(__dirname, './view')));

app.listen(3000, function() {
	console.log('started listen port', 3000);
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(session({secret: 'my-secret'}));

var user = require('./model/user');
var post = require('./model/post');

app.post('/login', function (req, res) {
  sessions = req.session;
  var user_name = req.body.email;
  var password = req.body.password;
  user.validateLogin(user_name, password, function (result) {
    if (result) {
      sessions.username = user_name;
      res.send('success');
    }
    else {
      res.send('fail');
    }

  });
});

  app.post('/register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    if (name && email && password) {
      user.register(name, email, password)
    }
    else {
      res.send('Failure');
    }
  });
  
app.get('/home', function (req, res) {
  sessions = req.session;
  if (sessions && sessions.username) {
    res.sendFile(__dirname + '/view/home.html');
  }
  else {
    res.send('unauthorized');
  }
});

app.post('/add-post', function (req, res) {
  var title = req.body.title;
  var subject = req.body.subject;
  post.addPost(title, subject, function (result) {
    res.send(result);
  });
});