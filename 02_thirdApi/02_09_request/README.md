# request 爬虫 (cheerio+request) #

[request 官方文档](https://www.npmjs.com/package/request)

[cheerio GitHub](https://github.com/cheeriojs/cheerio)

### 安装
`npm install request`

```js
var request = require('request');

request('http://www.baidu.com', function (error, response, body) {
  console.log('error:', error); //是否报错，报错就会弹出报错信息 - error: null
  console.log('statusCode:', response && response.statusCode);//抓取状态 - statusCode: 200
  console.log('body:', body);//抓取到网页代码 - html结构
});
```
