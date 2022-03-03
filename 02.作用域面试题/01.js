function foo () {
  console.log(n); // undefind
  var n = 2;
  console.log(n); // 2
}

var n = 1;
foo();