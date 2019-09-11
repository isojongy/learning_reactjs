var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './view')));

app.listen(3000, function() {
	console.log('started listen port', 3000);
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var user = require('./user');

app.post('/login', function (req, res) {
  var user_name = req.body.email;
  var password = req.body.password;
  if (user_name == 'admin' && password == 'admin') {
    res.send('success');
  }
  else {
    res.send('Failure');
  }

});

app.post('/register', function (req, res) {
  var name=req.body.name;
  var email=req.body.email;
  var password=req.body.password;

  if(name && email && password){
      user.register(name, email, password)
  }
  else{
    res.send('Failure');
  }
})