var obj = {
  name:'zhangsan',
  age:18
}

// 禁止对象添加新的属性
Object.preventExtensions(obj);
obj.height = 1.88;
console.log(obj);

// 禁止对象配置/删除里面的属性
Object.seal(obj);
delete obj.age;
console.log(obj);

// 禁止属性的修改
Object.freeze(obj);
obj.age = 19;
console.log(obj);