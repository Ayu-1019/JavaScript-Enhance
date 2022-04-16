// 创建多个Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  },1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  },2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  },3000)
})

// any方法会等到一个fulfilled状态，才会决定新Promise的状态
// 如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态
// 如果所有的Promise都是reject的，那么会报一个AggregateError的错误
Promise.any([p1, p2, p3]).then(res => {
  console.log(res); 
}).catch(err => {
  console.log(err);
  console.log(err.errors);
})