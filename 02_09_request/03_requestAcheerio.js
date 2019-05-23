const request = require('request');

// http://api.avatardata.cn/WorldNews/Query?key=xxxxxxxxxxxxxxxxx&page=1&rows=10
// request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
request.get({
	url: 'http://api.avatardata.cn/WorldNews/Query',
  form:{
    key: "e143ba9836fb44fa9968e785726230f9",
    rows:10,
    page: 1,
  }
}, (error, response, body) => {

  console.log(error);
  console.log("------------------------------------------------------------------------------------------");
  console.log(response.statusCode);
  console.log("------------------------------------------------------------------------------------------");
  console.log(body);

	if(!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		console.log(info);
	} else {
		console.log("请求出错");
	}
})

// err
