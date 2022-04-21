
setTimeout(() => {
  console.log('settimeout');
},2000)

queueMicrotask(() => {
  console.log('queueMicrotask');
})

Promise.resolve('promise').then(res => {
  console.log(res);
})

console.log('end');

// 在执行任何的宏任务之前都需要先保证微任务队列已经被清空

// 宏任务 macrotask
//    ajax、setTimeout、setInterval、DOM监听、UI Rendering等
// 微任务 microtask
//    Promise的then回调、 Mutation Observer API、queueMicrotask()等