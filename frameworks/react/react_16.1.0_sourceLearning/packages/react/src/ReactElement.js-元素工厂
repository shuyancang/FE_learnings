
import warning from 'fbjs/lib/warning';

import ReactCurrentOwner from './ReactCurrentOwner'; // => 指向react ReactFiber

var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7; // 使用symbol指代react元素, 或16禁止指定

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) { // 是否有ref
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) { // 是否有key
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) { // props 传入 key的判定
  var warnAboutAccessingKey = function() {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(
        false,
        '%s: `key` is not a prop. Trying to access it will result ' +
          'in `undefined` being returned. If you need to access the same ' +
          'value within the child component, you should pass it as a different ' +
          'prop. (https://fb.me/react-special-props)',
        displayName,
      );
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true,
  });
}

function defineRefPropWarningGetter(props, displayName) { // props 传入 ref 的判定
  var warnAboutAccessingRef = function() {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(
        false,
        '%s: `ref` is not a prop. Trying to access it will result ' +
          'in `undefined` being returned. If you need to access the same ' +
          'value within the child component, you should pass it as a different ' +
          'prop. (https://fb.me/react-special-props)',
        displayName,
      );
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true,
  });
}

var ReactElement = function(type, key, ref, self, source, owner, props) { // 每个react元素的生成工厂。均由函数生成的含独特标识的对象;
  var element = { // 每个react元素实际上是一个个对象.
    $$typeof: REACT_ELEMENT_TYPE, // react元素独有标识
    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: owner,
  };

  if (__DEV__) { // 开发模式下 增加_self和_source属性, -方便调试展示
    element._store = {};
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false,
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self,
    });
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source,
    });
    if (Object.freeze) { // 冻结关键传递
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }
  return element;
};

export function createElement(type, config, children) { // 生成一个react 元素： https://reactjs.org/docs/react-api.html#createelement
  // config: 将元素中的config(自定义)属性取出, 挂到元素的props中 
  var propName;
  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName];
      }
    }
  }

  var childrenLength = arguments.length - 2; // 传递的是多个Children时
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  if (type && type.defaultProps) { // defaultProps的指定
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (__DEV__) {
    if (key || ref) {
      if (
        typeof props.$$typeof === 'undefined' ||
        props.$$typeof !== REACT_ELEMENT_TYPE
      ) {
        var displayName =
          typeof type === 'function'
            ? type.displayName || type.name || 'Unknown'
            : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  ); // 属性确定后, 生成一个react工厂生成的元素
}

export function createFactory(type) { // 获取一个指定类型的react元素工厂https://reactjs.org/docs/react-api.html#createfactory
  var factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
}

export function cloneAndReplaceKey(oldElement, newKey) { // 基于某个元素克隆, 新元素携带新key
  var newElement = ReactElement(
    oldElement.type,
    newKey,
    oldElement.ref,
    oldElement._self,
    oldElement._source,
    oldElement._owner,
    oldElement.props,
  );
  return newElement;
}

export function cloneElement(element, config, children) { // 基于某元素克隆生成新元素https://reactjs.org/docs/react-api.html#cloneelement
  var propName;

  var props = Object.assign({}, element.props); // 指定元素的props克隆

  var key = element.key;
  var ref = element.ref;
  var self = element._self;
  var source = element._source;

  var owner = element._owner;

  if (config != null) { // 允许对传入的config进行修改写入
    if (hasValidRef(config)) {
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  var childrenLength = arguments.length - 2; // 同react create Element, 对多个子元素进行写入;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

export function isValidElement(object) { // 校核是否有效的react元素
  return (
    typeof object === 'object' &&
    object !== null &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
