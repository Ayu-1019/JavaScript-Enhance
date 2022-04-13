// 以...为剩余参数的前缀
// 剩余参数必须放到最后一个位置 否则会报错
function foo (a, b, c, ...args){
  // args是没有对应形参的参数
  console.log(a,b,c,args);
  // arguments是所有参数 arguments是一个类数组 不是真正的数组
  console.log(arguments);
}

foo(1,2,3,4,5,6);