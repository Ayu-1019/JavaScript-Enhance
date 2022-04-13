// 数组的解构
var names = ['zhangsan','lisi','wangwu'];

var [p1, p2, p3] = names;
// 解构最后一个元素
var [, , p] = names;
// 解构第一个元素 剩下的放入新数组
var [a, ...newNames] = names;

console.log(p1, p2, p3);
console.log(p);

// 对象的解构
var obj = {
  name:'zhangsan',
  age:22,
  height:1.88
}

var { name, age, height } = obj;
console.log(name, age, height);