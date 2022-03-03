// 柯里化
function foo1(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}

var result1 = foo1(1)(2)(3);
console.log(result1);

// 简化柯里化的代码
var foo2 = x => y => z => x + y + z;

var result2 = foo2(1)(2)(3); 
console.log(result2);