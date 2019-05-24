let sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("sleep");
          resolve('ok') ;
        }, time);
    })
}

let start = () => {
    sleep(3000).then((result) => {
        console.log(result)
    })
}

start()
