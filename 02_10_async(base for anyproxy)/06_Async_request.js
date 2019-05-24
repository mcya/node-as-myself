const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

let spider = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        })
    })
}

let start = async () => {
    let dom = await spider('http://www.lanrentuku.com/');
    let $ = cheerio.load(dom);
    $('img', '.in-ne').each((i, e) => {
        let src = $(e).attr('src');
        let name = src.substr(src.lastIndexOf('/') + 1);
        // request(src).pipe(fs.createWriteStream(name)) //直接保存在当前目录
        request(src).pipe(fs.createWriteStream(`./img/${name}`)) //图片保存到img文件夹下
    })
}

start();
