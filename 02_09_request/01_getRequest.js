var request = require('request');

// this is vim save


// 这里直接拉取 cnodejs 提供的api - get /topic/:id 主题详情

// get 拉取
// request.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312', (error, response, body) => {
//     console.log(body)
// })


// 直接拉取
request('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312', (error, response, body) => {
    console.log(body)
})
