// 默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用
// 如果我们希望是一个弱引用的话，可以使用WeakRef
const finalRegistry = new FinalizationRegistry((name) => {
  console.log(`注册在finalRegistry里的${name}被销毁`);
});

let obj1 = {
  name:'zhangsan',
  age:18
}
let obj2 = new WeakRef(obj1);

finalRegistry.register(obj1,'obj1');

// 如果原对象未被销毁那么可以获取到原对象
// 如果已被销毁那么获取到undefined
// console.log(obj2.deref());
obj1 = null;
setTimeout(() => {
  console.log(obj2.deref());
},10000)