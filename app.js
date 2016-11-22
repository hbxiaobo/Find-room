var http = require('http');
const path = require('path');
const express = require('express');

const app = express();
app.get('/', function(req, res){
	res.redirect('/index.html')
});
app.use('/index.html', express.static(__dirname+'/index.html'));

app.use('/dev', express.static(__dirname + '/views'));
app.use('/dev/src', express.static(__dirname + '/src'));

app.use('/views', express.static(__dirname + '/views'));
app.use('/src', express.static(__dirname+'/src'));


app.listen(16084, function(){
	console.log('server start at 16084');
});
module.exprots = app;