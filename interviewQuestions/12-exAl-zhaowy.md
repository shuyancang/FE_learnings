

# 输入一组正整数的数组，求出一个子数组，子数组当中的元素能够被两两整除，求出一个最长的子数组

  例:
  输入[1,2,3]
  输出[1,2]或者[1,3]

```javascript

var findDevidedSubArr = function(arr){
  var len = arr.length;
  if(len < 2) {
    return arr;
  }
  var sortedArr = arr.sort((a,b) => a - b) // 从小到大排序先;
  var result = getLongestSortedDevidedArr(sortedArr, []);
  return result;
}


var getLongestSortedDevidedArr = function(sortedArr, result){
  if(sortedArr.length < 2) {
    return sortedArr;
  }
  for(var i = 0; i < sortedArr.length; i++){
    var stepCalced = {};
    if(sortedArr[i] === sortedArr[i - 1] || stepCalced[sortedArr[i]] !== undefined){ // 优化: 重复数值不在参与计算
      continue;
    }
    var tmpRes = [sortedArr[i]];
    var restData = [];
    for(var j = i + 1; j < sortedArr.length; j++){
      if(sortedArr[j] === sortedArr[i]) { // 优化: 遇到后值与先值相同, 直接推入结果, 不参与递归
        tmpRes.push(sortedArr[j]);
        continue;
      }
      if(sortedArr[j] % sortedArr[i] === 0) { // 正序数组两两能被整除的特性: [a, ba, cba, dcba, ...] // n只要能整除(n - 1), 满足两两整除
        restData.push(sortedArr[j]);
        stepCalced[sortedArr[j]] = sortedArr[j]; // 优化: [2, 4, 8]的遍历中, 4可整除2, 2遍历后将跳过对4的处理
      }
    }
    var resRes = getLongestSortedDevidedArr(restData, []);
    for(var m = 0; m < resRes.length; m++){
      tmpRes.push(resRes[m]);
    }
    if (tmpRes.length > result.length){
      result = tmpRes;
    }
  }
  return result;
}

```