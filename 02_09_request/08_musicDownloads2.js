//1.爬取歌手网页
//2.分析网页，并获取该歌手所有歌曲的id
//3.根据id来拼接url,获取歌曲的下载地址
//4.执行下载
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'wscats',
	password: '123456',
	database: 'kugou'
});
connection.connect(); //进行连接
request("http://www.kugou.com/singer/3060.html", (err, res, body) => {
	//console.log(body)
	var $ = cheerio.load(body);
	var arr = $(".song_hid");
	$(".song_hid").each(function(i, e) {
		console.log($(e).attr("value").split("|")[1]);
		var link = $(e).attr("value").split("|")[1];
		var name = $(e).attr("value").split("|")[0];
		request(`http://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=${link}`, function(err, res, body) {
			if(body) {
				var url = JSON.parse(body).data.play_url;
				console.log(url);
				connection.query('INSERT INTO song SET ?', {
					name: name,
					url: url
				}, function(error, results, fields) {
					if(error) throw error;
					console.log(results);
				});
				//connection.end();
			}
			//request(mp3).pipe(fs.createWriteStream(name + '.mp3'));
		})
	})
})
