var express = require('express');
var path = require('path');
var session = require('express-session');

var app = express();
app.use(express.static(path.join(__dirname, './view')));

app.listen(3001, function() {
	console.log('started listen port', 3001);
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
  // if (sessions && sessions.username) {
    res.sendFile(__dirname + '/view/home.html');
  // }
  // else {
  //   res.send('unauthorized');
  // }
});

app.post('/addpost', function (req, res) {
  var title = req.body.title;
  var subject = req.body.subject;
  var id = req.body.id;
  if (id == '' || id == undefined){
    post.addPost(title, subject, function (result) {
      res.send(result);
    });
}
  else {
    post.updatePost(id, title, subject, function (result) {
      res.send(result);
    });
  }
});

app.post('/getPostWithId', function (req, res) {
  var id = req.body.id;
  post.getPostWithId(id, function (result) {
    res.send(result)
  })
});

app.get('/get-post-list', function (req, res) {
  post.getPostList(function (result) {
    res.send(result)
  })
});

app.post('/deletePost', function (req, res) {
  var id = req.body.id;
  post.deletePost(id, function (result) {
    res.send(result)
  })
});