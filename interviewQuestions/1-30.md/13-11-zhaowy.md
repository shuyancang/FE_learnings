# 给一棵二叉树，找出从根节点到叶子节点的所有路径。

```javascript
// TreeNodes: {val: 1, left: <TreeNode>, right: <TeeNode>}
var getTreePaths = function(treeNodes){ 
  if(!treeNodes) {
    return [];
  }
  var curPath = treeNodes.val + '';
  if (!treeNodes.left && !treeNodes.right) {
    return [curPath];
  }
  var result = [];
  if(treeNodes.left){
    var leftRes = getTreePaths(treeNodes.left);
    for(var i = 0; i < leftRes.length; i++){
      result.push(curPath + '=>' + leftRes[i]);
    }
  }
  if (treeNodes.right) {
    var rightRes = getTreePaths(treeNodes.right);
    for(var j = 0; j < rightRes.length; j++){
      result.push(curPath + '=>' + rightRes[j]);
    }
  }
  return result;
}
```