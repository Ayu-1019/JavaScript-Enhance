var n = 1;

function foo1 () {
  console.log(n); // 1 第二个打印
}

function foo2 () {
  var n = 2;
  console.log(n); // 2 第一个打印
  foo1();
}

foo2();
console.log(n); // 1 第三个打印