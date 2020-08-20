
# 给定一个整数，输出Mausoleum 数组
********
* 注: Mausoleum数组：由1,1,2,2,3,3,…,n-1,n-1,n,n 构成, 首先是不减少(即 增加或保持不变)，然后是不增加(减少或保持不变);
* 数组示例 [1, 2, 2, 3, 4, 4, 3, 1]; [1, 1]; [2, 2, 1, 1]; [1, 2, 3, 3, 2, 1];
* 输入输出实例1: n=1, [1, 1];
* 输入输出实例2: n=2, [1, 1, 2, 2],[1 ,2,2,1],[2, 2, 1, 1];
* 输入输出实例3: n=3, [3, 3, 2, 2, 1, 1],[2, 3, 3, 2, 1, 1],[2, 2, 3, 3, 1, 1],[1, 3, 3, 2, 2, 1],[1, 2, 3, 3, 2, 1],[1, 2, 2, 3, 3, 1],[1, 1, 3, 3, 2, 2],[1, 1, 2, 3, 3, 2],[1, 1, 2, 2, 3, 3];
********

```javascript
/*
  1. 实质上是生成一个谷形数组(正态)
  2. 解法
    2.1 递归: 状态方程: f(n) = f(n - 1)两个最大值(n - 1)位置的左, 中, 右分别插入n的三种情况的集合; 略
    2.2 三进制
      a. 数组组合规律为: a个1+b个2....k个(n-1)+2个n+(2-k)个(n-1)+...+(2-b)个2+(2-a)个1
      b. 后半部分与基于前半部分唯一确定, 故结果数组有3**(n-1)项
      c. 模拟一个三进制数(2110): 数位对应重复的数值, 数位数值代表有几个该数值
*/   
    var createMausoleum = function(num){
      if(num === 0) {
        return [];
      } else if (num === 1) {
        return [1, 1];
      }
      var len = Math.pow(3, num - 1);
      var result = [];
      for(var i = 0; i < len; i++){
        // var leftThreeRadixStr = i.tostring(3).padStart(n-1, '0'); // 快捷转为3进制数
        var threeRadixArr = createThreeRadixArr(i, num - 1); // 获取最大值左右三进制数
        var leftStr = threeRadixArr[0], rightStr = threeRadixArr[1];
        var tmpResult = [];
        for(var m = 0; m < leftStr.length; m++){ // 最大值左侧区域
          var leftVal = leftStr[m];
          while(leftVal > 0){ // 数值: m + 1; 次数: leftStr[m]
            tmpResult.push(m + 1);
            leftVal--;
          }
        }
        tmpResult.push(num, num);
        for(var n = 0; n < rightStr.length; n++){ // 最大值右侧区域
          var rightVal = rightStr[n];
          while(rightVal > 0){// 数值: num - 1 - m; 次数: leftStr[m]
            tmpResult.push(num - 1 - n);
            rightVal--;
          }
        }
        result.push(tmpResult);
      }
      return result;
    }

    var createThreeRadixArr = function(num, len){
      var leftThreeRadix = '', rightThreeRadix = '';
      while(len > 0){
        leftThreeRadix = (num % 3) + leftThreeRadix;
        rightThreeRadix += (2 - num % 3);
        num = parseInt(num / 3);
        len--;
      }
      return [leftThreeRadix, rightThreeRadix];
    }

```