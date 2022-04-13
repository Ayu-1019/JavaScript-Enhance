const obj = {
  name:'zhangsan',
  age:18
}

// 创建一个Proxy代理
// 之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作
// 第一个参数 代理的对象 
// 第二个参数 捕获器 (Proxy共有13个捕获器)
const objProxy = new Proxy(obj, {

  // 获取值时的捕获器
  get:function(target, key){
    console.log(`监听到${target}对象的${key}属性被访问`);
    return target[key];
  },

  // 设置参数时的捕获器
  set:function(target, key, newValue){
    console.log(`监听到${target}对象的${key}属性被设置值`);
    target[key] = newValue;
  },

  // 监听in的捕获器
  has:function(target, key){
    console.log(`监听到${target}对象的${key}属性in操作`);
    return key in target;
  },

  // 监听delete的捕获器
  deleteProperty:function(target, key){
    console.log(`监听到${target}对象的${key}属性delete操作`);
    delete target[key];
  }
})

// // 通过Proxy拿到属性值
// console.log(objProxy.name);
// console.log(objProxy.age); 

// // 通过Proxy也会改变原对象的值
// objProxy.name = 'lisi';
// objProxy.age = 20;
// console.log(objProxy.name);
// console.log(objProxy.age); 

// 监听in操作符
console.log("name" in objProxy);

// 监听delete
delete objProxy.age;
console.log(obj);
