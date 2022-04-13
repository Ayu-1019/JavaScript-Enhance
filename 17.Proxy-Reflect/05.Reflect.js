// Reflect 反射 提供了13个操作对象的方法
const obj = {
  name:'zhangsan',
  age:18
}

const objProxy = new Proxy(obj,{
  get:function(target, key, receiver){
    return target[key];
  },
  set:function(target, key, newValue, receiver){

  }
});
