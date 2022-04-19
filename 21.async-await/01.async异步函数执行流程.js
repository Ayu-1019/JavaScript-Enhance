async function foo1(){
  console.log('foo function');
  throw new Error('error');
  return '111';
}
async function foo2(){
  console.log('foo function');
  throw new Error('error');
  return '111';
}

// console.log('start');
// foo();
// console.log('end');

// 和普通函数的区别 
// 1.异步函数的返回值一定是promise
// console.log(foo1());

foo1().then(res => {
  console.log(res);
})
foo2().catch( err => {
  console.log(err);
})

// 2.异步函数的异常会被作为返回的promise的reject值
