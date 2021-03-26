

import warning from 'fbjs/lib/warning';

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {  // 开发者工具中的警告日志;
  if (__DEV__) {
    var constructor = publicInstance.constructor;
    const componentName =
      (constructor && (constructor.displayName || constructor.name)) ||
      'ReactClass';
    const warningKey = `${componentName}.${callerName}`; // 组件名 + 方法名
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) { // 防止重复警告
      return;
    }
    warning(
      false,
      '%s(...): Can only update a mounted or mounting component. ' +
        'This usually means you called %s() on an unmounted component. ' +
        'This is a no-op.\n\nPlease check the code for the %s component.',
      callerName,
      callerName,
      componentName,
    );
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}


var ReactNoopUpdateQueue = { // 抽象类, 并非在此直接实现 方法指向的是react-dom

  isMounted: function(publicInstance) {
    return false;
  },

  enqueueForceUpdate: function(publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  enqueueReplaceState: function(
    publicInstance,
    completeState,
    callback,
    callerName,
  ) {
    warnNoop(publicInstance, 'replaceState');
  },

  enqueueSetState: function(
    publicInstance,
    partialState,
    callback,
    callerName,
  ) {
    warnNoop(publicInstance, 'setState');
  },
};

export default ReactNoopUpdateQueue;
