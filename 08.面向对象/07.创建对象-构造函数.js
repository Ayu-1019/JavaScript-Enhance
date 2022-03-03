function foo() {
  console.log('foo被执行');
}

// foo是一个普通的函数 
foo()
// 如果通过new关键字来调用 那么这个函数就是一个构造函数了
new foo

// 通过new关键字调用和普通的调用有什么区别？
 




// 规范：构造函数首字母一般是大写
function Person(name, age, height){
  this.name = name;
  this.age = age;
  this.height = height;
};

var p1 = new Person('zhangsan',18,1.88);
var p2 = new Person('lisi',20,1.80);
var p3 = new Person('wangwu',14,1.70);
console.log(p1);
console.log(p2);
console.log(p3);