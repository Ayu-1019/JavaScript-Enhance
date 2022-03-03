// 1.setTimeout
// setTimeout(function() {
//   console.log(this);
// },2000)

// setTimeout(() => {
//   console.log(this);
// },2000)

// 2.监听点击
// const boxDiv = document.querySelector(".box");
// boxDiv.onclick = function () {
//   console.log(this);
// }

// boxDiv.addEventListener("click",function(){
//   console.log(this);
// })

// 3.数组函数
const arr = ['abc','def','ghi','jkl'];
arr.forEach(item => {
  console.log(item,this);
})
arr.map(item => {
  console.log(item,this);
})
