// 用于将两类对象转为真正的数组：类数组对象（array-like object）和可遍历（iterable）的对象（包括Set和Map）
// 第一个参数 要转化为数组的对象
// 第二个参数 数组中每个元素要调用的函数
// 第三个参数 映射函数中的this对象
console.log(Array.from('hello')); 
const result = Array.from('hello', item => item + item);
console.log(result);