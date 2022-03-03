
// 将函数作为另一个函数的参数传递进去

// function foo (aaaaa) {
//   aaaaa();
// };

// function bar () {
//   console.log('bar');
// };

// foo(bar);

function add (num1,num2) {
  return num1 + num2;
}

function sub (num1,num2) {
  return num1 - num2;
}

function foo (num1,num2,fun) {
  console.log(fun(num1,num2));
}

const m = 1;
const n = 2;

foo(m,n,add);
foo(m,n,sub);