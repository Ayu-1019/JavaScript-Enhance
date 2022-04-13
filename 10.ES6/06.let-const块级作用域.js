// ES6代码块级作用域对var是无效的
// 对let/const/function/class声明的类型是有效的
{
  var a = 'a';
  let b = 'b';
  function test(){
    console.log('test function');
  }
  class Person{

  }
}
console.log(a);
// console.log(b);

// 不同的浏览器有不同的实现 大部分的浏览器为了兼容以前的代码是没有块级作用域的
test();

// if switch for都是块级作用域


