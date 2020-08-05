

console.log('worker01启动')

addEventListener('message', function(e){
  console.log('worker01内的监听', e);
});

postMessage('worker01执行好了，向老大反馈a!')

console.log('worker01执行完成')