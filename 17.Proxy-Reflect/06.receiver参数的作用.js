const obj = {
  _name:'zhangsan',
  age:18,
  get name(){
    return this._name;
  },
  set name(newName){
    this._name = newName;
  }
}

const objProxy = new Proxy(obj, {
  get:function(target, key, receiver){
    // receiver是创建出来的代理对象
    console.log(`监听到${target}的${key}属性被访问`);
    return Reflect.get(target, key, receiver);
  },
  set:function(target, key, newValue, receiver){
    console.log(`监听到${target}的${key}属性被改变`);
    Reflect.set(target, key, newValue, receiver);
  }
})

console.log(objProxy.name);

