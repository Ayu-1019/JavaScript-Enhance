// 传入的回调函数会被立即执行 这个函数被称之为executor
// 在成功时回调resolve函数
// 在失败时回调reject函数
const promise = new Promise((resolve, reject) => {
  console.log('传入的函数被执行');
  resolve();
  reject(); 
});

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})