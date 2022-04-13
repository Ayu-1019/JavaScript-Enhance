// 使用let或const声明的变量 在声明之前 变量都是不可以访问的
// 这种现象称为暂时性死区 TDZ （temporal dead zone）
var a = 'a';

if(true){
  console.log(a);
   
  let a = 'aa';
}