/**
 * resolve（参数）
 *  1.传入普通的值或对象
 *  2.传入一个Promise 那么当前Promise的状态由传入的Promise来决定 相当于状态进行了移交
 *  3.传入一个对象 并且对象有then方法 
 */

const newPromise = new Promise((resolve, reject) => {

})

new Promise((resolve, reject) => {
  resolve(newPromise);
  // reject();
}).then(res => {
  
  console.log("res:", res);
}).catch(err => {
  
  console.log("err:", err);
})
