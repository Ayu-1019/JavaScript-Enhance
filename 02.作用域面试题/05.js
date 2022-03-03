function foo () {
  var a = b = 1;
  // 上面代码在执行时会被转换为下面两行代码
  // => var a = 1;
  //    b = 1;  注意 不是var b = 1；
}

foo();

console.log(b);  // 1
console.log(a);  // 找不到a
