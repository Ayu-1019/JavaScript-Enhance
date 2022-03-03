// var obj = {
//   message:'zhangsan',
//   foo:function foo() {
//     console.log(this);
//   }
// }

// var bar = obj.foo;
// bar(); // window还是obj ? 

function foo (){
  function bar () {
    console.log(this);
  }
  return bar;
}
var fun = foo();
var obj = {
  name:'zhangsan',
  fn:fun
}
obj.fn(); 