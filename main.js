var express = require('express');
var path = require('path');
var HOST = '192.168.20.2';
var PORT = '3000';
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res){
  res.send('Hello EJS!');
});

app.listen(PORT,HOST,function () {
  console.log('Server On!');
});
