// ES6之前给参数默认值
/**
 * 缺点：写起来麻烦 代码阅读性差
 *       有bug 传值为 0 '' null 
 */
function foo (a,b){
  a = a || 'aaa';
  b = b || 'bbb';
  console.log(a,b);
}

foo(0,'');

// ES6可以给函数参数提供默认值
function bar (a = 'aaa',b = 'bbb'){
  console.log(a,b);
}

bar(0,'');

// 函数的length属性
function test1(a,b,c){

}
function test2(a = 2,b,c = 1){

}
// 有默认值的参数要放在最后一个 
// 函数的length属性表示有几个参数
// 有默认值的参数后面的参数不算在length中
console.log(test1.length);
console.log(test2.length);