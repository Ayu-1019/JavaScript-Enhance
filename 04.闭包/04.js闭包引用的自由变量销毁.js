function foo () {
  var message = "zhangsan";
  var age = 18;
  function bar () {
    debugger;
    console.log(message);
  }
  return bar;
}
var fun = foo();
fun();