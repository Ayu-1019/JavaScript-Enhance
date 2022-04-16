// const promise =  Promise.reject("rejected message");
const promise =  Promise.reject(new Promise(() => {}));

promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})