const obj = {
  name:'zhangsan',
  age:18 
}

// 获取到一个数组 数组中存放可枚举属性的键值对数组
console.log(Object.entries(obj));
const objEntries = Object.entries(obj);

objEntries.forEach(item => {
  console.log(item);
})