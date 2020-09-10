


# js设计模式

* 模式, 更侧重与意图, 而非实现

## 1，单例模式：确保只有一个实例，提供全局访问；
* 用途: 界面/信息, 明确知道只有一个(弹框/登录效果等), 使用时创建, 不使用时隐藏, 再次点击时只需继续展示即可
* 核心: var singleLeton; if(!singleLeton){ createSingleLeton }
```javascript
var getSingle = function(fn){
  var result;
  return function(){
    return result || (result = fn.apply(this, arguments))
  }
}
```

## 2. 策略模式
* 定义一系列算法, 封装, 且使得其可以互相替换;
* 














