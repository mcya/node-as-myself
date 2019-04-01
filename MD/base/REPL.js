
function getUuid() {
  var nowDate = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (nowDate + Math.random()*16)%16 | 0;
    nowDate = Math.floor(nowDate/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  console.log("uuid", uuid);
  return uuid;
}
