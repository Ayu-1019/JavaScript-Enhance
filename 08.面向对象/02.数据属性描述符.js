var obj = {
  name:'zhangsan',
  age:20
}

// 数据属性描述符
Object.defineProperty(obj, "height", {
  // 很多配置
  // 是否可删除和修改
  configurable:false, // 默认值false
  // 是否可遍历枚举
  enumerable:true, // 默认值false
  get:function(value) {

  },
  set:function() {

  }
})

console.log(obj);
console.log(obj.height);