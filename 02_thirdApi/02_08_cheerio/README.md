# cheerio #

### 原生模块爬虫
```js
// 完整的demo - 需要手动创建img文件夹

/*

// 注意要遍历生成多个写入流，不然有可能下载文件写入不成功
for(let i = 0; i < imgs.length; i++) {
	var imgStream = fs.createWriteStream(`./img/vks${i}.jpg`);
	download(imgs, i, imgStream)
}

*/


var http = require("http");
var fs = require("fs");
//类似于 jQ
const cheerio = require("cheerio");
const queryStr = require("querystring");
var postData = queryStr.stringify({
	"msg": "Hello!"
})
//发送http的 request 请求
var request = http.request({
	hostname: "www.ivsky.com",
	port: 80,
	method: "POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
}, function(response) {
	var datas = "";
	var imgs = [];
	response.on("data", function(chunk) {
		datas += chunk;
	})
	response.on("end", function() {
		const $ = cheerio.load(datas);
    console.log("$", $);
		$("img").each(function(idx, dom) {
			imgs.push($(dom).attr("src"))
		})
    console.log("imgs", imgs);
		// 遍历创建对应的 可写流
		for(let i = 0; i < imgs.length; i++) {
			var imgStream = fs.createWriteStream(`./img/ivsky${i}.jpg`);
			download(imgs, i, imgStream)
		}
	})

})
request.on("error", function(err) {
	console.log('problem with request: ' + err.message)
})
request.write(postData)
request.end();

function download(imgs, i, imgStream) {
	http.get(imgs[i], function(res) {
    // res.pipe(imgStream)
    // 在pipe之前添加on('error',fn)可以监听错误，在后面添加on('close',fn)可以监听完成

		res.on('error', (err) => {console.log(err)})
       .pipe(imgStream)
       .on('close', () => { console.log('成功!') })
	})
}
//注意加end方法 结束请求
//req.end()必须被调用，即使没有在请求体内写入任何数据
//也必须调用。因为这表示已经完成HTTP请求

```
