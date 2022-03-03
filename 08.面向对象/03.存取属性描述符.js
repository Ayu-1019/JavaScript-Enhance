var obj = {
  name:'zhangsan',
  age:20,
  _address:'上海'
}

// 存取属性描述符
// 1.隐藏一个私有属性并希望被外界使用和赋值
// 2.希望截获某一个属性它访问和设置值的过程时，也会使用存取描述符
Object.defineProperty(obj, "address", {
  // 很多配置
  // 是否可删除和修改
  configurable:false, // 默认值false
  // 是否可遍历枚举
  enumerable:true, // 默认值false
  get:function() {
    foo();
    return this._address;
  },
  set:function(value) {
    bar();
    this._address = value;
  }
})

console.log(obj.address);
obj.address = '天津';
console.log(obj.address);

function foo(){
  console.log("获取了一次address的值");
}

function bar(){
  console.log("设置了一次address的值");
}
