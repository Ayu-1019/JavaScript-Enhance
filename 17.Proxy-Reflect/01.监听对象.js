const obj = {
  name:'zhangsan',
  age:18
}

// Object.defineProperty(obj,'name',{
//   get:function(){
//     console.log('监听到obj对象的name属性被访问');
//     return this;
//   },
//   set:function(){
//     console.log('监听到obj对象的name属性被访问');
//   }
// })

// console.log(obj.name);
// obj.name = 'lisi';

Object.keys(obj).forEach(key => {

  let value = obj[key];

  Object.defineProperty(obj, key, {
    get:function(){
      console.log(`监听到obj对象的${key}属性被访问`);  
      return value;
    },
    set:function(newValue){
      console.log(`监听到obj对象的${key}属性被访问`);
      value = newValue;
    }
  })
})

obj.name = 'lisi';
obj.age = 21;

console.log(obj.name);
console.log(obj.age);