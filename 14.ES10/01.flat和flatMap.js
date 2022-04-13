// 1.flat对数组进行降维 数组扁平化
const nums = [1, 2, [1, 2, 3], [[7, 7], [8, 8]], 4];

// 默认降维一层
const newNums1 = nums.flat();
console.log(newNums1);

const newNums2 = nums.flat(2);
console.log(newNums2);

// 2.flatMap方法首先使用映射函数映射每个元素 然后将结果压缩成一个新数组
// flatMap是先进行map操作 再做flat的操作
// flatMap中的flat相当于深度为1
const nums2 = [1, 2, 3, 4];
const newNums3 = nums2.flatMap(item => {
  return item * 2;
}) 
console.log(newNums3);

// flatMap应用场景
const message = ['hello JavaScript', 'my name is zhangsan', '盗 梦 空 间'];
const words = message.flatMap(item => {
  return item.split(" ");
})

console.log(words);