var a = 'a';
let b = 'b';

const c = 'c';
// const本质上是传递的值不能修改
// 但是如果传递的是一个引用类型(内存地址) 可以通过引用找到对应的对象 去修改对象内部的属性 这个是可以的
const obj = {
  foo:'foo'
}
// obj = {}
obj.foo = 'foo已修改';
console.log(obj.foo);