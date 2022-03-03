// 1.原型
// 每个对象中都有一个prototype 这个属性称之为对象的原型（隐式原型）
var obj = {
  name:'zhangsan',
  age:18
}

var info = {
  name:'lisi',
  age:20
}

// 早期的ECMA没有规范如何查看prototype
// 浏览器给对象提供了一个属性
console.log(obj.__proto__);
console.log(info.__proto__);

// ES5之后提供的Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(info));

// 2.原型有什么用
// 当我们从一个对象中获取某一个属性时 它会触发[get]操作
//   在当前对象中查找对应的属性 如果找到直接使用
//   如果没有找到 那么会沿着它的原型链去查找



option.map((item,index) => {
  return (
    <div key={index} onClick={}>{item.name}</div>
  )
})