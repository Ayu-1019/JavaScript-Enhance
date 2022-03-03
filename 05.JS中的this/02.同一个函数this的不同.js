// this指向什么 和所处的位置是没有关系的
// 和被调用的方式有关系

function foo () {
  console.log(this);
}

foo();

var obj = {
  name:'zhangsan',
  foo:foo
}

obj.foo();

foo.apply("abc");