function foo () {
  m = 5;
  // JS引擎会认为m是全局对象
}
// function foo () {
//   var m = 5;
// }

foo();

console.log(m); // 1.m为5   2.找不到m