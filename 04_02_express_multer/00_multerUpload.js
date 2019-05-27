
// 单个文件上传


//引入express模块
var express = require('express');
//引入multer模块
var multer = require ('multer');
var path = require('path');
//设置上传的目录，
var upload = multer({ dest:  path.join(__dirname,'temp')});
var app = express();

// 跨域支持
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use(express.static(path.join(__dirname, '/')));

// 文件单个上传 - 相当于一个后台api接口
app.post('/singleUpload', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
  console.log(req.body);
  res.end("up success");
});

// 文件多个上传
app.post('/mulUpload', upload.array('photos', 12), function (req, res, next) {
  console.log(req.file);
  console.log(req.body);
  // res.end("up success");
  res.end(req.file + "<br/><br/>" + req.body);
})

// app.listen(8085)
app.listen(8085, function(){
  // 最好添加一个提示 表示运行不会报错
	console.log('Server running on http://localhost:8085');
});
