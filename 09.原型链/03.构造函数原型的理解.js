function Person() {

}

var p1 = new Person();
var p2 = new Person();

// 都为true
console.log(p1.__proto__ === Person.prototype);
console.log(p2.__proto__ === Person.prototype);
console.log(p1.__proto__ === p2.__proto__ );

// 所有对象的__proto__属性都是指向的该构造函数的prototype属性

p1.__proto__.name = 'zhangsan';
console.log(p2.name);

Person.prototype.name = 'lisi';
console.log(p1.name);