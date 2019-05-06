# request 爬虫 (cheerio+request) #

[request 官方文档](https://www.npmjs.com/package/request)
[cheerio GitHub](https://github.com/cheeriojs/cheerio)

### 安装
`npm install request`

```js
var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```