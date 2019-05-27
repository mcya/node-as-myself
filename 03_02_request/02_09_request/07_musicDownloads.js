// 酷狗批量下载音乐
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
request('http://www.kugou.com/yy/singer/home/3060.html', function(error, response, body) {
	//console.log(body)
	var $ = cheerio.load(body);
	var arr = $('.song_hid');
	//console.log(arr);
	for(var num = 0; num < arr.length; num = num + 1) {
		console.log($(arr[num]).attr("value"));
		//计算字符串的长度
		console.log($(arr[num]).attr("value").length);
		var length = $(arr[num]).attr("value").length;
		//找出第一个|的位置在哪里
		console.log($(arr[num]).attr("value").indexOf("|"));
		var index = $(arr[num]).attr("value").indexOf("|");
		console.log($(arr[num]).attr("value").substring(index + 1, length - 7))
		var hash = $(arr[num]).attr("value").substring(index + 1, length - 7);
		request('http://www.kugou.com/yy/index.php?r=play/getdata&hash=' + hash, function(error, response, body) {
			console.log(JSON.parse(body).data.play_url);
			var mp3 = JSON.parse(body).data.play_url;
			var audio_name = JSON.parse(body).data.audio_name;
			request(mp3).pipe(fs.createWriteStream(audio_name + '.mp3'));
		});
	}
})
