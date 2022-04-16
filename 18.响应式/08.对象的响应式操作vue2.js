// 保存当前需要收集的响应式函数
let activeReactiveFn = null;

// 对象的响应式
const obj = {
  name: "zhangsan", // depend对象
  age: 18 // depend对象
}

const targetMap = new WeakMap();

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn);
  // }

  depend(){
    if(activeReactiveFn){
      this.reactiveFns.add(activeReactiveFn);
    }
  }

  notify() {
    // console.log(this.reactiveFns);
    this.reactiveFns.forEach(fn => {
      fn();
    })
  }
}

// 封装好一个响应式函数 只需要传入对象
function reactive(obj){
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function(){
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function(newValue){
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      }
    })
  })
  return obj;
}

// 封装一个响应式的函数
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

// 封装一个获取depend函数
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  // 根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}

const objProxy = reactive(obj);

const info = {
  address:'上海市',
  height:1.88
}

const infoProxy = reactive(info);

watchFn(() => {
  console.log(infoProxy.address);
})

infoProxy.address = '杭州市';