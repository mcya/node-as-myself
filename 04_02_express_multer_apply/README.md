## 关于`multer`的上传和下载的应用
文档只列出核心函数，给出的demo只是调用的方式不同

### `multer` 单图/多图 上传

```js
//引入express框架
var express = require("express");
var app = express();
app.listen(3000);

var multer = require('multer');
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	filename: function(req, file, cb) {//给上传文件重命名，获取添加后缀名
		var fileFormat = (file.originalname).split(".");
    //给图片加上时间戳格式防止重名名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});

//上传（单图和多图 在页面和js上去做适配即可）
app.post('/upload-single', upload.single('logo'), function(req, res, next) {
	res.append("Access-Control-Allow-Origin","*");
	console.log(req.file)
	console.log('文件类型：%s', req.file.mimetype);
	console.log('原始文件名：%s', req.file.originalname);
	console.log((req.file.originalname).split("."))
	console.log('文件大小：%s', req.file.size);
	console.log('文件保存路径：%s', req.file.path);
	res.send({
		code: '0', success: true, message: "上传成功", data: ""
	});
});
```


### `node http+fs` 原生上传
```js
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    // 跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 必须要设置
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    req.pipe(fs.createWriteStream('./pic.png'));
    res.end('success');
}).listen(8877);
```

### `http+fs` 原生下载
```js
const http = require('http');
const fs = require('fs');
const req = http.get('http://fs.w.kugou.com/201903291031/8de6755d3130fef2cdf40a83801bca07/G123/M01/13/1D/uw0DAFqox3OAWe0UAD_HxYp_Ivc469.mp3', (res) => {
    const writeStream = fs.createWriteStream('演员.mp3');
    res.pipe(writeStream);
})
```


## 关于录屏下载详见 【[录屏下载](https://github.com/mcya/node-as-myself/tree/master/04_02_express_multer_apply/录屏下载_延伸)】 目录下md文档和文件
