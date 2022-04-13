const arr = ['abc', 'def', 'ghi', NaN];

// 在ES7之前
if(arr.indexOf('abc') !== -1){
  console.log('包含abc');
}

// ES7
// 第一个参数 查找的内容
// 第二个参数 从第几个开始查找
if(arr.includes('abc',2)){
  console.log('包含abc');
} else {
  console.log('不包含abc');
}

// includes和indexOf的区别 对NaN的判断
if(arr.indexOf(NaN) !== -1){
  console.log('indexOf 包含NaN');
}
if(arr.includes(NaN, 2)){
  console.log('inlcudes 包含NaN');
}