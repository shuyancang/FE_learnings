
# 已知数据结构users, 请实现语法支持user.unique能够按照name字段去重, 并输出结构为: ['a', 'b']

```javascript
  function unique(users, key){
    if(!users || !(users.length > 0)) {
      return [];
    }
    var tmpCollection = Object.create(null), result = [];
    for(var i = 0; i < users.length; i++){
      var tmpInfo = users[i] || {};
      var tmpValue = tmpInfo[key];
      if(tmpCollection[tmpValue] === undefined && tmpValue !== undefined){
        result.push(tmpValue);
        tmpCollection[tmpValue] = tmpValue;
      }
    }
    return result;
  }
```








