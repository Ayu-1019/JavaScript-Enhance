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

Promise.allSettled([p1, p2, p3, 'aaaa']).then(res => {
  console.log(res);
}).then(err => {
  console.log(err);
})
