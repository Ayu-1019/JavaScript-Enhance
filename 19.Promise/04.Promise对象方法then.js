

const promise = new Promise((resolve, reject) => {
  resolve('success');
  // reject('failure');
})

// 1.同一个promise可以被多次调用then方法
// 当resolve方法被回调时 所有的then方法传入的回调函数都会被调用
promise.then(res => {
  console.log("res1:", res);
})
promise.then(res => {
  console.log("res2:", res);
})
promise.then(res => {
  console.log("res3:", res);
})

// 2.then方法是可以有返回值的
// then方法本身是有返回值的 返回值是promise
// 如果返回的是一个普通的值 那么这个值被作为新的promise的resolve的值
promise.then(res => { 
  console.log(res);
  return 123;
}).then(res => {
  console.log(res);
})

// 如果返回的是一个promise
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1');
    },3000)
  })
}).then(res => {
  console.log(res);
})

// 如果返回的是一个对象 并且该对象实现了thenable
promise.then(res => {
  return {
    then:function(resolve, reject){
      resolve('2');
    }
  }
}).then(res => {
  console.log(res);
})