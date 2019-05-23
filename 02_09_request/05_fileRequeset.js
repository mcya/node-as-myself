const request = require('request');
const fs = require('fs');

// 文件流

// 写入图片 - test.png
// request('http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg').pipe(fs.createWriteStream('test.png'))

写入文件 - cnodejs.json
request('https://cnodejs.org/api/v1/topics?page=1&limit=10').pipe(fs.createWriteStream('cnodejs.json'))
