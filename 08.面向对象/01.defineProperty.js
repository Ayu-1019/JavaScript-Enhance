var obj = {
  name:'zhangsan',
  age:20
}

// 属性描述符是一个对象
// 通过属性描述符为obj添加一个属性
Object.defineProperty(obj, "height", {
  // 很多配置
  value:1.88
})

// 添加的这个属性不能被遍历出来
console.log(obj);
console.log(obj.height);