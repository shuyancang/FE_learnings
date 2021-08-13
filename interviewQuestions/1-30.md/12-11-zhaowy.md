# 实现一个diff, 如何检测两个数组的增删改

```javascript
  // arr: [{id: number, val: number,}, ...]
  var oldArr = [{id: 1, val: 1}, {id: 2, val: 2}, {id: 3, val: 3}, {id: 4, val: 4}];
  var newArr = [{id: 2, val: 20}, {id: 3, val: 30}, {id: 4, val: 4}, {id: 5, val: 5}];
  var arrDiff = function(oldArr, newArr){
    const addArr = newArr.filter(m => !oldArr.find(n => n.id === m.id));
    const deleteArr = oldArr.filter(m => !newArr.find(n => n.id === m.id));
    const editArr = newArr.filter(m => {
      const oldInfo = oldArr.find(n => n.id === m.id);
      return oldInfo && (oldInfo.val !== m.val);
    })
    return { addArr, deleteArr, editArr };
  }

```

