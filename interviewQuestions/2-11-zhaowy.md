
# 2.1 表单可以跨域吗
表单可以直接跨域进行提交, 但更新页面时, 不会获取到任何跨域页面的信息;
ajax实质是脚本运行, 受到同源策略的规范;

# 2.2 搜索请求如何处理

搜索过程中, 快速的字符输入/更变, 会导致过于频繁的请求, 浪费请求支援, 一般考虑防抖(debounce)进行优化;
********
1. 防抖: 持续触发事件时，一定时间内没有再触发事件，函数执行一次; 如果设定的时间之前，又触发了事件，就重新开始延时;
2. 防抖实现:
```javascript
    function debounce(fn, wait) {    
      var timeout = null;    
      return function() {        
        if(timeout !== null) {
          clearTimeout(timeout)
        };        
        timeout = setTimeout(fn, wait);    
      }
    }
```
********

# 2.3 搜索请求中文如何请求
一般是通过encodeURI或encodeURIComponent方法将对应的中文进行编码;