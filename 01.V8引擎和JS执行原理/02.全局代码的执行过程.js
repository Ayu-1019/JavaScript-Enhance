/*
  1.代码被解析 V8引擎内部会帮助我们创建一个对象（globalObject -> go）
  2.运行代码：
      V8为了执行代码，V8引擎内部会有一个执行上下文栈(Execution Context Stack )（函数调用栈）
      为了全局代码都能够正常的执行，需要创建全局 执行上下文（Global Execution Context）（全局代码被执行时才会被创建）

*/

var name = 'zhangsan';

foo();
function foo () {
  console.log("foo");
}

console.log(name);
console.log(num1);  // undefined 变量提升

var num1 = 1;
var num2 = 2;
var result = num1 + num2;

console.log(result);