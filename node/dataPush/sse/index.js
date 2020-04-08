import { eventNames } from "cluster";


var source;

function init(){
  source = new EventSource('http://localhost/sse/data.php');
  source.onopen = function(){ // 已经与服务器连接
    console.log('connection ok', this.readyState);
  }
  source.onmessage = function(event){ // 接收
    console.log('数据', event.data);
  }
  source.onerror = function(event){ // 接收
    console.log('错误', this.readyState)
  }
}

init();