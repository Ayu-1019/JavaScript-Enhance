// finally方法 表示无论promise对象无论编程fulfilled还是reject状态 最后都会被执行的代码
const promise = new Promise((resolve, reject) => {
  resolve('success');
  // reject('failure');
})

promise.then(res => {
  console.log("res:", res);
}).catch(err => {
  console.log("err:", err);
}).finally(() => {
  console.log('finally code');
})