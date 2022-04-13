class Person{
  // 类的构造方法
  // 一个类 只能有一个构造方法
  // 1.在内存中创建一个对象
  // 2.将类的原型prototype赋值给创建对象的 moni.__proto__ = Person.prototype
  // 3.将对象赋值给函数的this：new绑定 this = moni
  // 4.执行函数体中的代码 
  // 5.自动返回创建出来的对象
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person('zhangsan',18);
const p2 = new Person('lisi',20);

console.log(p1,p2);