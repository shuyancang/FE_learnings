console.log('worker02启动')

addEventListener('message', function(e){
  console.log('worker02内的监听', e);
});

postMessage('worker02执行好了，向老大反馈a!')


console.log('worker02执行完成')