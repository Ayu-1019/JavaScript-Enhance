var a = 1;

function foo () {
  console.log(a); // undefined
  return 
  var a = 2;
}

foo();