var obj = {
  name:'zhangsan',
  age:18
}

console.log(obj.__proto__);

// 到底是查找到哪一层对象之后停止查找？
// 字面对象obj的原型是[Object: null prototype] {} 
// [Object: null prototype] {} 就是最顶层的原型

