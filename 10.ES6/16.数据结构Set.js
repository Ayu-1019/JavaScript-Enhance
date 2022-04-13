// 创建Set结构
const set = new Set();
   
// Set数据结构的方法
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);
// size属性 返回set的长度
console.log(set.size);

// Set数据结构的值不会重复
set.add(1);
console.log(set);

// 数组去重
const arr = [1,2,3,4,5,1,2];
const arrSet = new Set(arr);
console.log(...arrSet);