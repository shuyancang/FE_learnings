
# 约定规则实现一个方法decodeStr; 输入一个字符串, 依据约定规则输出编码结果; N[string]标识string重复N次, 假设字符串一定是有效的字符串(但需要考虑可能出现的错入入参);
* 例1: str = '2[a]1[bc]' => 'aabc';
* 例2: str = '2[e2[d]]' => 'eddedd';
* 例3: str = '3[abc]2[cd]ff' => 'abcabccdcdff';

```javascript
var decodeStr = function(str){
  return str;
}
```