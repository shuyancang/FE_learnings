

import lowPriorityWarning from 'shared/lowPriorityWarning'; // 开发环境下的警告输出
import describeComponentFrame from 'shared/describeComponentFrame'; // 组件所属信息描述
import getComponentName from 'shared/getComponentName'; // 获取组件名称
import checkPropTypes from 'prop-types/checkPropTypes'; // 对prop-types属性的检查
import warning from 'fbjs/lib/warning'; // 警告提示

import ReactCurrentOwner from './ReactCurrentOwner'; // 组件所属
import {isValidElement, createElement, cloneElement} from './ReactElement'; // 引入react元素相关基础生成方法
import ReactDebugCurrentFrame from './ReactDebugCurrentFrame'; // 当前组件调用栈信息

if (__DEV__) {
  var currentlyValidatingElement = null;

  var getDisplayName = function(element): string { // 元素名称
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function(): string { // 调用栈信息
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(
        name,
        currentlyValidatingElement._source,
        owner && getComponentName(owner),
      );
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var REACT_FRAGMENT_TYPE =
    (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.fragment')) ||
    0xeacb;

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

function getDeclarationErrorAddendum() { // 获取错误组件名
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) { // 获取错误文件名
  if (
    elementProps !== null &&
    elementProps !== undefined &&
    elementProps.__source !== undefined
  ) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) { // 在动态children中未显式声明可用key => 获取当前组件,及父信息
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName =
      typeof parentType === 'string'
        ? parentType
        : parentType.displayName || parentType.name;
    if (parentName) {
      info = `\n\nCheck the top-level render call using <${parentName}>.`;
    }
  }
  return info;
}

function validateExplicitKey(element, parentType) { // 元素须有key, 否则warn
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) { // 开关 - 显示一次;
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  var childOwner = '';
  if (
    element &&
    element._owner &&
    element._owner !== ReactCurrentOwner.current
  ) {
    childOwner = ` It was passed a child from ${getComponentName(
      element._owner,
    )}.`;
  }

  currentlyValidatingElement = element;
  if (__DEV__) { // 输出错误提示
    warning(
      false,
      'Each child in an array or iterator should have a unique "key" prop.' +
        '%s%s See https://fb.me/react-warning-keys for more information.%s',
      currentComponentErrorInfo,
      childOwner,
      getStackAddendum(),
    );
  }
  currentlyValidatingElement = null; // 回收
}

function validateChildKeys(node, parentType) { // 确保child节点有key属性
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) { // 数组 child
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) { // 非数组
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) { // node可迭代
    var iteratorFn =
      (ITERATOR_SYMBOL && node[ITERATOR_SYMBOL]) || node[FAUX_ITERATOR_SYMBOL];
    if (typeof iteratorFn === 'function') {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

function validatePropTypes(element) { // 检查元素的prop type是否吻合
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;

  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum); // 检测types
    currentlyValidatingElement = null;
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(
      componentClass.getDefaultProps.isReactClassApproved,
      'getDefaultProps is only used on classic React.createClass ' +
        'definitions. Use a static property named `defaultProps` instead.',
    );
  }
}

function validateFragmentProps(fragment) { // 对React Fragment检测props是否吴川
  currentlyValidatingElement = fragment;
  for (const key of Object.keys(fragment.props)) {
    if (!VALID_FRAGMENT_PROPS.has(key)) {
      warning(
        false,
        'Invalid prop `%s` supplied to `React.Fragment`. ' +
          'React.Fragment can only have `key` and `children` props.%s',
        key,
        getStackAddendum(),
      );
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(
      false,
      'Invalid attribute `ref` supplied to `React.Fragment`.%s',
      getStackAddendum(),
    );
  }

  currentlyValidatingElement = null;
}

export function createElementWithValidation(type, props, children) { // 创建通过验证的的react元素
  var validType =
    typeof type === 'string' ||
    typeof type === 'function' ||
    typeof type === 'symbol' ||
    typeof type === 'number';
  if (!validType) {
    var info = '';
    if (
      type === undefined ||
      (typeof type === 'object' &&
        type !== null &&
        Object.keys(type).length === 0)
    ) {
      info +=
        ' You likely forgot to export your component from the file ' +
        "it's defined in.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(
      false,
      'React.createElement: type is invalid -- expected a string (for ' +
        'built-in components) or a class/function (for composite ' +
        'components) but got: %s.%s',
      type == null ? type : typeof type,
      info,
    );
  }

  var element = createElement.apply(this, arguments);

  if (element == null) {
    return element;
  }
  if (validType) { // 检测children
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element); // 检测fragment props
  } else {
    validatePropTypes(element); // 检测proptypes
  }

  return element;
}

export function createFactoryWithValidation(type) { // 指定type的工厂检测
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  if (__DEV__) {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function() {
        lowPriorityWarning(
          false,
          'Factory.type is deprecated. Access the class directly ' +
            'before passing it to createFactory.',
        );
        Object.defineProperty(this, 'type', {
          value: type,
        });
        return type;
      },
    });
  }

  return validatedFactory;
}

export function cloneElementWithValidation(element, props, children) { // 克隆元素时检测;
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) { // children检测
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement); // 检测新元素
  return newElement;
}
