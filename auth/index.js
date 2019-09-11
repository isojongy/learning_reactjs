var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './view')));

app.listen(3000, function() {
	console.log('started listen port', 3000);
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/login', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
  	res.send('success');
  }
  else{
  	res.send('Failure');
  }
})