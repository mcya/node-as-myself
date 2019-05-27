var express = require('express');
var app = express();

app.listen(8083, function(){
	console.log('Server running on http://localhost:8083');
});

// app.get('/', function(request, response){
//   response.send('this is post demo');
// })


// ---------------------------------------------------------------------------------------------------------
// 参数接收
// ---------------------------------------------------------------------------------------------------------

// 参数接收和 GET 基本一样，不同的在于 GET 是 `request.query` 而 POST 的是 `request.body`
// 访问地址：`http://localhost:8083/getParams?username=dk&age=18`，可通过 `request.query` 来获取参数
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/getParams', urlencodedParser, function (request, response) {
    var params = {
        username: request.body.username,
        age: request.body.age
    }
   response.send(params);
});
