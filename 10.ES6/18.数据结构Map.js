const obj1 = { name:'zhangsan' }
const obj2 = { name:'lisi' }

const info = {
  [obj1]:'a',
  [obj2]:'b'
}
// obj被转成字符串作为key 
console.log(info);

// Map用于存储映射关系
const map1 = new Map();
map1.set(obj1,'aaaaa');
map1.set(obj2,'bbbb');
map1.set(123,'111');
console.log(map1);

const map2 = new Map([[obj1, '111'], [obj2, '222'], [123, '333']]);
console.log(map2);

map2.forEach(item => {
  console.log(item);
})