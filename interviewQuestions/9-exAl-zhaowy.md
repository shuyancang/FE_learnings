
# 给定一个整数，输出Mausoleum 数组
********
* 注: Mausoleum数组：由1,1,2,2,3,3,…,n-1,n-1,n,n 构成, 首先是不减少(即 增加或保持不变)，然后是不增加(减少或保持不变);
* 数组示例 [1, 2, 2, 3, 4, 4, 3, 1]; [1, 1]; [2, 2, 1, 1]; [1, 2, 3, 3, 2, 1];
* 输入输出实例1: n=1, [1, 1];
* 输入输出实例2: n=2, [1, 1, 2, 2],[1 ,2,2,1],[2, 2, 1, 1];
* 输入输出实例3: n=3, [3, 3, 2, 2, 1, 1],[2, 3, 3, 2, 1, 1],[2, 2, 3, 3, 1, 1],[1, 3, 3, 2, 2, 1],[1, 2, 3, 3, 2, 1],[1, 2, 2, 3, 3, 1],[1, 1, 3, 3, 2, 2],[1, 1, 2, 3, 3, 2],[1, 1, 2, 2, 3, 3];
********

```javascript
// 1. 实质上是生成一个谷形数组(正态分布?)
// 2. 状态方程: f(n) = f(n - 1)两个最大值(n - 1)位置的左, 中, 右分别插入n的三种情况的集合;
var createMausoleum = function(num){
  if(num === 0) {
    return [];
  } else if (num === 1) {
    return [1, 1];
  }
  return insertMaxNum(createMausoleum(num - 1), num);
}

var insertMaxNum = function(mausoleunArr, maxNum){ // 辅助函数, 向一个Mausoleum最大值num处插入num + 1(maxNum) ( * 3 )
  var len = mausoleunArr.length;
  var curMax = len / 2, maxIndex = mausoleunArr.indexOf
  var nextArrLen = len + 2;
  var result = [];
}

```