// 解析Dom结构，网络爬虫简单实例


var http = require('http');
var cheerio = require('cheerio');
http.get('http://www.gongjuji.net', function(req, res) {
    var result = '';
    req.on('data', function(data) {
        result += data;
    });
    req.on('end', function() {
        //console.info(result);
        parseHtml(result);
    });
});
//解析html 获取内容
function parseHtml(result) {
    var $ = cheerio.load(result);
    //获取html
    //console.info($.html());
    //获取文本内容
    //console.info($.text());
    //获取文本，将多个空白符 替换成空格
    //console.info($.text().replace(/\s+/g,' '));
    //获取文本，将多个空格 替换成一个空
    //console.info($.text().replace(/[ ]+/g,' '));
    //获取文件，将多个换行替换成 一个换行
    //console.info($.text().replace(/(\r\n)+[ ]+/g,'\r\n').replace(/(\r\n)+/g,'\r\n'));
    //过去文件，将多个连续换行替换成 一个换行
    //console.info($.text().replace(/(\r\n)+/g,'\r\n'));
    //解析html内容
    // itemList[]
    // {title:'',linkUrl：’‘}
    var captionList = $('.body-content .caption');
    var itemList = [];
    captionList.each(function(item) {
        var cap = $(this);
        //console.log(cap.find('h3').text());
        var item = {
            title: cap.find('h3').text(),
            linkUrl: cap.find('a').attr('href')
        }
        itemList.push(item);
    });
    console.info(itemList);


  // 解析结果：
  
  // [ { title: 'Md5加密工具',
  //   linkUrl: 'http://md5.gongjuji.net/encrypt/' },
  // { title: 'Md5解密工具',
  //   linkUrl: 'http://md5.gongjuji.net/dencrypt/' },
  // { title: '滑块控件', linkUrl: 'http://www.gongjuji.net/slider/' },
  // { title: '上传控件工具', linkUrl: '/uploader/' },
  // { title: '二维码生成工具', linkUrl: 'http://pic.gongjuji.net/qrcode/' },
  // { title: '二维码识别工具',
  //   linkUrl: 'http://pic.gongjuji.net/qrcode/sweep/' },
  // { title: '字符���计工具',
  //   linkUrl: 'http://character.gongjuji.net/char/' },
  // { title: '本地DNS映射修改工具',
  //   linkUrl: 'http://www.gongjuji.net/img/hostoperate/' },
  // { title: 'IP信息查询工具', linkUrl: 'http://www.gongjuji.net/ip/' },
  // { title: '查看屏幕分辨率',
  //   linkUrl: 'http://www.gongjuji.net/browser/screen/' },
  // { title: '网页转图片工具',
  //   linkUrl: 'http://www.gongjuji.net/img/htmltoimg/' },
  // { title: '视频转gif工具',
  //   linkUrl: 'http://www.gongjuji.net/img/converttogif/' },
  // { title: '图片��玻璃工具',
  //   linkUrl: 'http://www.gongjuji.net/img/blur/' },
  // { title: '图片转Base64工具',
  //   linkUrl: 'http://www.gongjuji.net/img/dataurl/' },
  // { title: '字节转换工具', linkUrl: 'http://calc.gongjuji.net/byte/' },
  // { title: '时间单位换算', linkUrl: 'http://calc.gongjuji.net/time/' } ]

}
