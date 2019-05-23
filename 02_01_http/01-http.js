//原生模块
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(reqeust, response){
	//第二个参数（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象
	var urlObj = url.parse(reqeust.url, false);
	var query = urlObj.query;
	// querystring.parse 解析请求格式:
	var qsObj = querystring.parse(query);
	console.log(query, urlObj, qsObj);//只会在node终端log出来，而不是浏览器
	response.end('Hello Node');
}).listen(8080);
