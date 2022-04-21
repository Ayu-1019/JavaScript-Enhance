// 1.await跟上表达式
function requestData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('111');
    }, 2000)
  })
}

async function foo1(){
  await requestData().then(res => {
    console.log(res);
  })

  console.log('--------');
}

foo1();

// // 2.await跟上其他值
// async function foo2(){
//   const res1 = await 222;
//   console.log(res1);

//   const res2 = await {
//     then: function(resolve, reject) {
//       resolve('2222222');
//     }
//   }
//   console.log(res2);
// }

// foo2();
