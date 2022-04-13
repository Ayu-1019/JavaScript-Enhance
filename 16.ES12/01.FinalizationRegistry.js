// FinalizationRegistry类
// 传入一个回调函数
const finalRegistry = new FinalizationRegistry((name) => {
  console.log(`注册在finalRegistry里的${name}被销毁`);
});

let obj1 = {
  name:'zhangsan',
  age:18
}
let obj2 = {
  name:'lisi',
  age:20
}

// 注册对象 可以传第二个参数 在回调函数中可以接收到
finalRegistry.register(obj1,'obj1');
finalRegistry.register(obj2,'obj2');

obj1 = null;
obj2 = null;