function createArray () {
  // arr占据的内存空间为4M
  // 4*1024*1024=4M
  var arr = new Array(1024 * 1024).fill(1);
  return function() {
    console.log(arr.length);
  }
}

var arrFns = [];
for (var i = 0;i<100;i++){
  arrFns.push(createArray());
}

setTimeout(() => {
  arrFns = null;
},2000)
// var arrFn = createArray();
// arrFn();