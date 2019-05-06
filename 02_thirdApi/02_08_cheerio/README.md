# cheerio #
Cheerio实现了核心jQuery的一个子集。Cheerio从jQuery库中删除了所有DOM不一致和浏览器残骸，揭示了它真正华丽的API。
即，Cheerio模块引入了jquery核心的一部分，去除了jquery库中所有在DOM和浏览器的不兼容部分，只保留了它主要核心API。

### 安装
`npm install cheerio`
官网: [cheerio官网 https://github.com/cheeriojs/cheerio](https://github.com/cheeriojs/cheerio)

### 示例
```js
// 构建Dom结构 - 解析dom结构的: 01_domAnalysis.js
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>
```

### 原生模块爬虫-img
```js
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
			var imgStream = fs.createWriteStream(`./img/vks${i}.jpg`);
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
		res.pipe(imgStream);
	})
}
```
