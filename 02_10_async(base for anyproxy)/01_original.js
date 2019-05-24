let sleep = (time, cb) => {
    setTimeout(() => {
      console.log("sleep");
      cb('ok');
    }, 3000);
}

let start = () => {
    sleep(3000, (result) => {
      console.log("start", result)
    })
}

start()
