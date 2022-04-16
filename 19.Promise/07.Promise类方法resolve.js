// 转成Promise对象
function foo (){
  const obj = {
    name:'zhangsan'
  }
  return new Promise((resolve, reject) => {
    resolve(obj);
  })
}

foo().then(res => {
  console.log("res:", res);
})

// 类方法 promise.resolve
const promise = Promise.resolve({name:'lisi'});
console.log(promise);