//
function foo () {
  var message = "zhangsan";
  function bar () {
    console.log("bar",message);
  }
  return bar;
}
var fun = foo();
fun();