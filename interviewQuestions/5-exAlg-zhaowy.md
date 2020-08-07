



# 1.实现一个将 52 张牌随机均等的分给四个人，比如输入 [0,1,2,3....51] ，输出[[1,2,16...],[4,3,6..],[....],[....]]
```javascript
  var randomEqualCard = function(cards, num){ // cards 卡牌, num 分成的份数
    var len = cards.length;
    if (!cards || !(num > 1) || !(cards.length > num) || (cards.length % num !== 0)) {
      return; // 输入不合要求;
    }
    // 任意从数组中, 抽取一个元素, 将该元素与数组最末元素互换位置; 且将该元素推入对应人的对应位置, 然后从剩余的n - 1个元素中, 继续任意选一个, 依次保证随机
    var cardRange = len;
    var result = [];
    for(var i = 0; i < num; i++){
      result[i] = []; // 每个人的牌
    }
    while(cardRange > 0){
      var randomNum = Math.floor(cardRange * Math.random()) // (0 - len - 1的随机数);
      var tmp = cards[cardRange - 1];
      cards[cardRange - 1] = cards[randomNum];
      cards[randomNum] = tmp; // 将随机数放到末尾,
      result[cardRange % num].push(cards[cardRange - 1]); // 将这个随机数推入一个人; 发牌操作~
      cardRange--; // 缩小随机范围
    }
    return result;
  }
```

# 2.算法：实现36进制转换
```javascript
  // # 2.算法：实现36进制转换 ？？  要不要实现 负数, 小数啊 ? 
  var intToThirtySix = function(num, base){ // 十进制整数转36进制
    // String.fromCharCode(65 + num) 进行转化
    var result = '';
    while(num > 0 || num < 0){ // 
      var digit = num % base;
      var rest = Math.floor(num / base);
      num = rest;
      result = digit + result;
    }
    return result;
  }

  var thritySixToInt = function(num, base){
    var result = '';
    // 每一位拆出来 * base就好
    return result;
  }
```


# 3.给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

```javascript
// 最大和的连续子数组 意思是说[1, -1, 2, -3, 4, 5, 0, 6]; [1, -1, -1, -1, 2, -9, 3, -3, 4, -4]
// 这个'连续'是指数组内的值连续(直接出现4, 5, 6这种还是出现0 0 0这种?) 还是说是一个数组的某个区间的和一直在连续正增长?
```

var findMaxSubArr = function(){
  
}





















