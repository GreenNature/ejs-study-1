var express = require('express');
var path = require('path');
var HOST = '192.168.20.2';
var PORT = '3000';
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

var data={count:0};
app.get('/',function (req,res) {
  data.count++;
  res.resnder('my_first_ejs',data);
});
app.get('/reset', function (req,res) {
  data.count = 0;
  res.render('my_twice_ejs',data);
});
app.get('/set/count',function (req,res) {
  if(req.query.count) data.count = req.query.count;
  res.render('mythird_ejs',data);
});
app.get('/set/num',function (req,res) {
  data.count = req.params.num;
  res.render('my_first_ejs', data);
});

app.get('/',function(req, res){
  res.send('Hello EJS!');
});

app.listen(PORT,HOST,function () {
  console.log('Server On!');
});
