
// 使用typeof判断数据类型, 返回一个字符串, 但并非返回的所有结果都符合预期。
typeof false // 'boolean'
typeof .2 // 'number'
typeof NaN // 'number'
typeof '' // 'string'
typeof undefined // 'undefined'
typeof Symbol() // 'symbol'
typeof new Date() // 'object'
typeof [] // 'object'

typeof alert // 'function' => 1!
typeof null // 'object' => 2!
typeof abcderefe // 未声明的变量 'undefined' => 3!
