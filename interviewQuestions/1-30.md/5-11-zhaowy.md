

1. 手动实现一个函数, 给定一个数组[1, 0, 2, 3, 4, -1, -3], 输出任意两个值和为0的下标






```javascript

    var getPlusMinusIndex = function(numArr){
      var numMap = {}, curIndex = 0, curNum = numArr[curIndex];
      while(typeof curNum === 'number'){ // 不用特意去判定NaN吧······; Number.isNaN
        if (numMap[curNum] === undefined) { // 不存在, 加入map映射
          numMap[-curNum] = curIndex;
        } else { // 找到了, 直接返回下标;
          return [numMap[curNum], curIndex]
        }
        curNum = numArr[++curIndex]
      }
      return [];
    }
    getPlusMinusIndex([1, 0, 5, 4, 0, -4, -1]);
    getPlusMinusIndex([1 , 0, 5, 3]);
    getPlusMinusIndex([0, 0]);
```











