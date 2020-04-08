'use strict';

var cat = {a: 123, b: 23, c: 'sdfjl', d: []}


Object.create(cat) // 基于当前对象作为原型创建新的继承对象

Object.defineProperty(cat, 'name', {
  value: 'catty',
  writable: false, // 是否可修改
  enumerable: true, // 是否可枚举
  configurable: false // 属性描述符
})

Object.keys(cat); // 属性数组

Object.freeze(cat); // 冻结对象

// Object.is(value1, value2); // 比较两个对象是否真等;