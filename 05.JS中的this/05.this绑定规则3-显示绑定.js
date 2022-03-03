function foo () {
  console.log("函数被调用了",this);
}

var obj = {
  message:'zhangsan'
}

// 直接调用和使用apply/call调用的不通在于this的绑定不同
// call/apply在执行函数时可以明确的绑定this 称之为显示绑定

// foo()直接调用this指向全局对象（window）
foo();

// call/apply可以指定this的绑定对象
foo.call(obj);
foo.apply(obj);

//call/apply的区别
function sum(num1,num2){
  console.log(num1 + num2,this);
}
sum.call("call",1,2);
sum.apply("apply",[1,2]);

// bind
var newFoo = foo.bind("abcd");
newFoo();
