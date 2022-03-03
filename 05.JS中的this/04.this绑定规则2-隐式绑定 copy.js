// 隐式绑定：object.fun()
// object对象会被js引擎绑定到fun函数中this里面


// function foo(){
//   console.log(this);
// }
// var obj = {
//   name:'zhangsan',
//   foo:foo
// }
// obj.foo();


// var obj = {
//   message:'zhangsan',
//   foo:function(){
//     console.log(this.message);
//   }
// }
// var bar = obj.foo;
// bar();


var obj1 = {
  message:'zhangsan',
  foo:function(){
    console.log(this);
  }
}
var obj2 = {
  message:'lisi',
  bar:obj1.foo
}
obj2.bar();