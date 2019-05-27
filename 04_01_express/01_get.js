var express = require('express');
var app = express();

app.listen(8080, function(){
	console.log('Server running on http://localhost:8080');
});

// ---------------------------------------------------------------------------------------------------------
// 路由 内容
// ---------------------------------------------------------------------------------------------------------

// 访问8080显示的内容
app.get('/', function(request, response){
  response.send('this is only one can write to page content for "localhost:8080" ');
})

// 相当于一个跳转router
app.get('/getUsers', function(request, response){
  response.send('this is router to "/getUsers" web');
})

// ---------------------------------------------------------------------------------------------------------
// 访问文件
// ---------------------------------------------------------------------------------------------------------

// Node.js 默认是不能访问静态资源文件（*.html、*.js、*.css、*.jpg 等），如果要访问服务端的静态资源文件则要用到方法 `sendFile`
// `__dirname` 为 Node.js 的系统变量，指向文件的绝对路径。

// http://localhost:8080/index.html 直接访问
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

// http://localhost:8080/index.png 直接访问
app.get('/index.png', function (req, res) {
   res.sendFile( __dirname + "/" + "index.png" );
});


// ---------------------------------------------------------------------------------------------------------
// 参数获取
// ---------------------------------------------------------------------------------------------------------


// GET 参数接收之 Query Strings
// 访问地址：`http://localhost:8080/getParams?username=dk&age=18`，可通过 `request.query` 来获取参数
app.get('/getParams', function(request, response){
    var params = {
        username: request.query.username,
        age: request.query.age
    }
    response.send(params);
})

// GET 参数接收之 路径方式
// 访问地址：`http://localhost:8080/getParams/admin/18`，可通过 `request.params` 来获取参数
app.get('/getParams/:username/:age', function(request, response){
    var params = {
        username: request.params.username,
        age: request.params.age
    }
    response.send(params);
})
