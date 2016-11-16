var http = require('http');
const path = require('path');
const express = require('express');

const app = express();
app.use('/views', express.static(__dirname + '/views'));
app.use('/src', express.static(__dirname+'/src'));
app.use('/index.html', express.static(__dirname+'/index.html'));



app.listen(9798, function(){
	console.log('server start at 9798');
});


module.exprots = app;