// request.js
function requestData(url){
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      resolve(url)
    }, 2000);
  })
}

// 1.通过promise中then的返回值解决
requestData('zhangsan').then(res => {
  return requestData(res + 'aaa');
}).then(res => {
  return requestData(res + 'bbb')
}).then(res => {
  console.log(res);
})

// Promise + generator实现
function* getData(){
  const res1 = yield requestData('lisi');
  const res2 = yield requestData(res1 + 'aaa');
  const res3 = yield requestData(res2 + 'bbb');
  const res4 = yield requestData(res3 + 'ccc');
  console.log(res4);
}

// 2.手动执行生成器函数
// const generator = getData();
// generator.next().value.then(res => {
//   generator.next(res).value.then(res => {
//     generator.next(res).value.then(res => {
//       console.log(res);
//     })
//   })
// })

// 3.封装一个自动执行的
function execGenerator(genFn){
  const generator = genFn();
  function exec(res){
    const result = generator.next(res);
    if(result.done){
      return result.done;
    }
    result.value.then(res => {
      exec(res);
    })
  }

  exec()
}
execGenerator(getData);

// 4.第三方包自动执行
const co = require('co');
co(getData)

// 5.async/await
async function getData1(){
  const res1 = await requestData('wangwu');
  const res2 = await requestData(res1 + 'aaa');
  const res3 = await requestData(res2 + 'bbb');
  const res4 = await requestData(res3 + 'ccc');
  console.log(res4);
}
getData1();