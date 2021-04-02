

'use strict';

export type {
  HostConfig,
  Deadline,
  Reconciler,
} from './src/ReactFiberReconciler';

var ReactFiberReconciler = require('./src/ReactFiberReconciler');

module.exports = ReactFiberReconciler.default
  ? ReactFiberReconciler.default
  : ReactFiberReconciler;
