var express = require('express');
var app = express();

app.listen(8083, function(){
	console.log('Server running on http://localhost:8083');
});



// ---------------------------------------------------------------------------------------------------------
// 参数接收
// ---------------------------------------------------------------------------------------------------------

// 参数接收和 GET 基本一样，不同的在于 GET 是 `request.query` 而 POST 的是 `request.body`
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/postParams', urlencodedParser, function (request, response) {
    var params = {
				falge: true,
        username: request.body.username,
        age: request.body.age
    }
   response.send(params);
});

// 关于post的使用需要 结合 HTML 来实现 即是执行一个方法 - 02_post.html
