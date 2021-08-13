
# 约定规则实现一个方法decodeStr; 输入一个字符串, 依据约定规则输出编码结果; N[string]标识string重复N次, 假设字符串一定是有效的字符串(但需要考虑可能出现的错入入参);
* 例1: str = '2[a]1[bc]' => 'aabc';
* 例2: str = '2[e2[d]]' => 'eddedd';
* 例3: str = '3[abc]2[cd]ff' => 'abcabccdcdff';

```javascript
    var decodeStr = function(str){
      if(typeof str !== 'string') {
        throw '请输入字符串';
      }
      var index = 0, decodeQueue = [];
      while(index < str.length) {
        var eleStr = str[index];
        if (eleStr === '[') {
          decodeQueue.push(index);
        }
        if (decodeQueue.length > 0 && eleStr === ']') {
          var leftIndex = decodeQueue.pop();
          var rightIndex = index;
          str = strFormat(str, leftIndex, rightIndex);
          index = 0;
          continue;
        }
        index++;
      }
      return str;
    }
    var strFormat = function(str, startIndex, rightIndex){ // 辅助函数: 将形如str[]对应左右index展开;
      var temp = str.substring(startIndex + 1, rightIndex);
      var copiedStr = '';
      var copyNum = '';
      while(str[--startIndex] >= 0) {
        copyNum = str[startIndex] + copyNum;
      }
      for(var i = 0; i < copyNum; i++){
        copiedStr += temp;
      }
      str = str.substring(0, startIndex + 1) + copiedStr + str.substring(rightIndex + 1);
      return str;
    }

```