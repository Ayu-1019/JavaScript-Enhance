var obj = {
  name:'zhangsan',
  age:18
}

// 如果在当前对象上查找属性没有查找到 就会去原型（__proto__）对象上查找
// 如果仍然没有找到会一直沿着原型链去查找

obj.__proto__ = {
  
}

obj.__proto__.__proto__ = {

}

obj.__proto__.__proto__.__proto__ = {
  height:1.88
}

console.log(obj.height);