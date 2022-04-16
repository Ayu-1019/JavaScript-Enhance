class Depend{
  constructor(){
    this.reactiveFns = [];
  }

  addDepend(reactiveFn){
    this.reactiveFns.push(reactiveFn)
  }

  notify(){
    this.reactiveFns.forEach(fn => {
      fn();
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend();
function watchFn(fn){ 
  depend.addDepend(fn);
}

const obj = {
  name:'zhangsan',
  age:18
}

// 监听对象的属性变化：Proxy（vue3）/ Object.defineProperty（vue2）
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver){
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, newValue, receiver){
    Reflect(target, key, newValue, receiver);
    depend.notify();
  }
})

function foo(){
  const newName = obj.name;
  console.log('你好');
  console.log(obj.name, 'foo function');
}

function bar(){
  console.log('普通的其他函数');
  console.log('这个函数不需要有任何响应式');
}

watchFn(foo);

watchFn(function demo(){
  console.log(obj.name,'demo function');
});

obj.name = 'lisi';
depend.notify();