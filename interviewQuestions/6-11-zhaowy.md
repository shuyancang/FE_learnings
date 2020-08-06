
# 根据实例输入输出矩阵规律完成matrix 函数: 

```javascript
// function matrix(n){}
// matrix(n).forEach((e, i) => console.log(e))

// 示例1:  输入3或4, 输出:
// [0, 2, 0]
// [2, 1, 2]
// [0, 2, 0]

// 示例2:  输入5或6, 输出:
// [0, 0, 3, 0, 0]
// [0, 3, 2, 3, 0]
// [3, 2, 1, 2, 3]
// [0, 3, 2, 3, 0]
// [0, 0, 3, 0, 0]

// 示例2:  输入7或8, 输出: 
// [0, 0, 0, 4, 0, 0, 0]
// [0, 0, 4, 3, 4, 0, 0]
// [0, 4, 3, 2, 3, 4, 0]
// [4, 3, 2, 1, 2, 3, 4]
// [0, 4, 3, 2, 3, 4, 0]
// [0, 0, 4, 3, 4, 0, 0]
// [0, 0, 0, 4, 0, 0, 0]

function matrix(n){
  if (!(n > 0)) {
    return [];
  }
  var maxNum = (+n + 1) >> 1; // 32位以内整形····要考虑的更大数值就使用/2了哈。最大值->实际上是距离中心点最大长度;
  var len = 2 * maxNum - 1; // 矩阵的宽, 高;
  var midIndex = maxNum - 1; // 中心点index;
  var matrixData = [];
  for(var i = 0; i <= midIndex; i++){ // 只需要遍历一半矩阵行即可, 剩下的一半与上一半对称;
    matrixData[i] = [];
    for(var j = 0; j < len; j++) { // 行中每一列
      // 思路1: 每一列的数值, 实际上是走向中心点的最近步数: △i(midIndex - i) + △j(midIndex - j的绝对值) + 1, 若大于maxNum 则 0; -较简单
      // 思路2: 先计算该行中心点数值, 再基于该行距离中心点，计算数值;
      var rowDiff = midIndex - j;
      var eleNum = (midIndex - i) + (rowDiff >= 0 ? rowDiff : (-rowDiff)) + 1;
      matrixData[i][j] = eleNum > maxNum ? 0 : eleNum;
    }
  }
  for(var j = midIndex + 1; j < len; j++){
    matrixData[j] = matrixData[midIndex - (j - midIndex)];
  }
  // matrixData.forEach(e => console.log(e));
  return matrixData;
}
```



