//npm install express
var express = require('express');
//npm install body-parser
var bodyParser = require("body-parser");
var app = express();
//配置静态文件夹,在本地public读取css,js,html等文件
app.use(express.static('public'));
//post请求需要body-parser模块处理
app.use(bodyParser.urlencoded({
	extended: false
}));
app.get('/', function(req, res) {
	res.send('Hello World!');
});
app.get('/home', function(req, res) {
	//get请求参数对象
	console.log('get请求参数对象:', req.query);
	res.send('get请求');
});
app.post('/home', function(req, res) {
	//post请求参数对象
	console.log('post请求参数对象:', req.body);
	res.send('post请求');
});
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
