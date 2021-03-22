

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 * 输出开发环境下的警告信息
 */

var lowPriorityWarning = function() {};

if (__DEV__) { // 只在开发环境下输出console.warn警告信息
  const printWarning = function(format, ...args) {
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function(condition, format, ...args) {
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
          'message argument',
      );
    }
    if (!condition) {
      printWarning(format, ...args);
    }
  };
}

export default lowPriorityWarning;
