module.exports = {
    summary: 'a rule to hack response',
    * beforeSendResponse(requestDetail, responseDetail) {
        if (requestDetail.url === 'http://httpbin.org/user-agent') {
            const newResponse = responseDetail.response;
            newResponse.body += '- AnyProxy Hacked! Wscats Test~';
            return new Promise((resolve, reject) => {
                setTimeout(() => { // delay
                    resolve({
                        response: newResponse
                    });
                }, 5000);
            });
        }
    },
};
