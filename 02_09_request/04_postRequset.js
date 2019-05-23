const request = require('request');

// post 请求

// request.post('http://service.com/upload', {form:{key:'value'}})


// request.post('http://service.com/upload').form({key:'value'})

request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){
  console.log(err);
  console.log(" -------------------- ");
  console.log(httpResponse);
  console.log(" -------------------- ");
  console.log(body);
})
