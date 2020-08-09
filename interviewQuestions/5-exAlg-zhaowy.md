



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
  var intToDigit = function(num){ // 十进制整数转36进制
    var baseDigit = 36;
    if (typeof num !== 'number' || (parseInt(num) !== num && num !== 0)) {
      throw '请输入整数数字进行转换';
    }
    if (num === 0) {
      return 0;
    }
    var result = '';
    var sign = num > 0 ? '' : '-';
    num < 0 && (num = -num);
    while(num > 0){// while 循环, 配合 String.fromCharCode(65 + num) 进行转化
      var restNum = num % baseDigit;
      var restStr = String.fromCharCode((restNum > 9 ? 55 : 48) + restNum);
      result = restStr + result;
      num = Math.floor(num / baseDigit);
    }
    result = sign + result;
    return result;
  }

  var digitToInt = function(numStr){ // 36进制字符串转十进制
    var baseDigit = 36;
    if (typeof numStr !== 'string') {
      throw '非法36进制字符';
    }
    var result = 0;
    for(var i = 0; i < numStr.length; i++){
      var eachStr = numStr[i];
      var eachCharCode = eachStr.charCodeAt();
      var eachNum;
      if (eachCharCode >= 48 && eachCharCode <= 57) { // 0 - 9;
        eachNum = +eachStr;
      } else if (eachCharCode >= 65 && eachCharCode <= 90) { // 10 - 35
        eachNum = numStr[i].charCodeAt() - 55;
      } else {
        throw '非法36进制字符';
      }
      result = result * baseDigit + eachNum;
    }
    return result;
  }
  
```


# 3.给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

```javascript

```

var findMaxSubArr = function(){
  
}





















