const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

// http://www.lanrentuku.com/
request('http://www.lanrentuku.com/', (error, response, body) => {
    let $ = cheerio.load(body);
    $('img', '.in-ne').each((i, e) => {
        let src = $(e).attr('src');
        let name = src.substr(src.lastIndexOf('/') + 1);
        // request(src).pipe(fs.createWriteStream(name))
        request(src).pipe(fs.createWriteStream(`./img/${name}`))//需要手动创建 img 文件夹
    })
})
