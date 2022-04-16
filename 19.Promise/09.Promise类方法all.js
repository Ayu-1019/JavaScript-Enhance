// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  },1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  },2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  },3000)
})

// 所有的Promise都变成fulfilled时 再拿到结果
// 传入的非promise会被转为promise
// 在拿到所有结果之前 有一个promise变成了rejected 那么整个promise是rejected
Promise.all([p1, p2, p3, 'aaaa']).then(res => {
  console.log(res);
}).then(err => {
  console.log(err);
})