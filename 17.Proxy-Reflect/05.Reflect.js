// Reflect 反射 提供了13个操作对象的方法
const obj = {
  name:'zhangsan',
  age:18
}

const objProxy = new Proxy(obj,{
  get:function(target, key, receiver){
    console.log(`监听到${target}的${key}属性被访问`);
    return Reflect.get(target, key);
  },
  set:function(target, key, newValue, receiver){
    console.log(`监听到${target}的${key}属性被改变`);
    Reflect.set(target, key, newValue);
  }
});

objProxy.name = 'lisi';
console.log(objProxy.name);
