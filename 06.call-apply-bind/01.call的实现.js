// 给所有函数添加一个方法
Function.prototype.zxycall = function(){
  console.log('zxycall被执行');
  var fn =this;
  fn();
}

function foo () {
  console.log('foo被执行');
}
foo.zxycall();