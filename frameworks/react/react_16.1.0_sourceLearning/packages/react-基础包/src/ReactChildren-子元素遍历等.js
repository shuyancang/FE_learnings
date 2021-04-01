

import emptyFunction from 'fbjs/lib/emptyFunction'; // 不同类型的空函数~
import invariant from 'fbjs/lib/invariant';
import warning from 'fbjs/lib/warning';

import {isValidElement, cloneAndReplaceKey} from './ReactElement';
import ReactDebugCurrentFrame from './ReactDebugCurrentFrame';

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;
const REACT_PORTAL_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.portal')) ||
  0xeaca;
var SEPARATOR = '.';
var SUBSEPARATOR = ':';

function escape(key) { // key字符串替换 => 确保私有
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2',
  };
  var escapedString = ('' + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext( // 获取context池 => 栈
  mapResult,
  keyPrefix,
  mapFunction,
  mapContext,
) {
  if (traverseContextPool.length) { // 栈顶设置属性 弹出返回
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else { // 空栈, 返回设置属性值的对象
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0,
    };
  }
}

function releaseTraverseContext(traverseContext) { // 栈内推一个空context对象
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

function traverseAllChildrenImpl( // 对children的遍历 => 递归遍历 + 摊平树形children
  children,
  nameSoFar,
  callback,
  traverseContext,
) {
  // key会一层层传递且用;
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    children = null;
  }

  if ( // 单children
    children === null ||
    type === 'string' ||
    type === 'number' ||
    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) ||
    (type === 'object' && children.$$typeof === REACT_PORTAL_TYPE)
  ) {
    callback(
      traverseContext,
      children,
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar,
    );
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // 子计数
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) { // 多个子;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl( // 递归 获取子 数量
        child,
        nextName,
        callback,
        traverseContext,
      );
    }
  } else { // 可遍历的子对象;
    var iteratorFn =
      (ITERATOR_SYMBOL && children[ITERATOR_SYMBOL]) ||
      children[FAUX_ITERATOR_SYMBOL];
    if (typeof iteratorFn === 'function') {
      if (__DEV__) {
        if (iteratorFn === children.entries) {
          warning(
            didWarnAboutMaps,
            'Using Maps as children is unsupported and will likely yield ' +
              'unexpected results. Convert it to a sequence/iterable of keyed ' +
              'ReactElements instead.%s',
            ReactDebugCurrentFrame.getStackAddendum(),
          );
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) { // 利用生成器进行迭代, 进行遍历 递归操作
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          callback,
          traverseContext,
        );
      }
    } else if (type === 'object') { // 子为对象
      var addendum = '';
      if (__DEV__) {
        addendum =
          ' If you meant to render a collection of children, use an array ' +
          'instead.' +
          ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(
        false,
        'Objects are not valid as a React child (found: %s).%s',
        childrenString === '[object Object]'
          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
          : childrenString,
        addendum,
      );
    }
  }

  return subtreeCount;
}

function traverseAllChildren(children, callback, traverseContext) { // 通常用于props.children
  if (children == null) {
    return 0;
  }
  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

function getComponentKey(component, index) { // 获取元素key, 否则使用index
  if (
    typeof component === 'object' &&
    component !== null &&
    component.key != null
  ) {
    return escape(component.key);
  }
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var {func, context} = bookKeeping;
  func.call(context, child, bookKeeping.count++);
}

function forEachChildren(children, forEachFunc, forEachContext) { // children的遍历:https://reactjs.org/docs/react-api.html#react.children.foreach
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext( // 取出
    null,
    null,
    forEachFunc,
    forEachContext,
  );
  traverseAllChildren(children, forEachSingleChild, traverseContext); // 执行
  releaseTraverseContext(traverseContext); // 释放
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) { // 对某个子元素执行的func
  var {result, keyPrefix, func, context} = bookKeeping;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
      mappedChild,
      result,
      childKey,
      emptyFunction.thatReturnsArgument,
    );
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(
        mappedChild,
        keyPrefix +
          (mappedChild.key && (!child || child.key !== mappedChild.key)
            ? escapeUserProvidedKey(mappedChild.key) + '/'
            : '') +
          childKey,
      );
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  // 将children完全遍历, 节点全部存入array中, 是react节点会更改key后再放到array
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(
    array,
    escapedPrefix,
    func,
    context,
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapChildren(children, func, context) { // props.children的maphttps://reactjs.org/docs/react-api.html#react.children.map => React.Children.map(children, func, context)
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function countChildren(children, context) { // count计数https://reactjs.org/docs/react-api.html#react.children.count
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

function toArray(children) { // obj-child变数组 https://reactjs.org/docs/react-api.html#react.children.toarray
  var result = [];
  mapIntoWithKeyPrefixInternal(
    children,
    result,
    null,
    emptyFunction.thatReturnsArgument,
  );
  return result;
}

function onlyChild(children) { // 单个children https://reactjs.org/docs/react-api.html#react.children.only
  invariant(
    isValidElement(children),
    'React.Children.only expected to receive a single React element child.',
  );
  return children;
}

export {
  forEachChildren as forEach,
  mapChildren as map,
  countChildren as count,
  onlyChild as only,
  toArray,
};
