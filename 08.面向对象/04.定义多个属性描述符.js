var obj = {
  _age:18,
  set age(value){
    this._age = value
  },
  get age(){
    return this._age
  } 
}

Object.defineProperties(obj, {
  name:{
    configurable:true,
    enumerable:true,
    writable:true,
    value:'why'
  },
  // age:{
  //   configurable:true,
  //   enumerable:true,
  //   get:function() {
  //     return this._age
  //   },
  //   set:function(value) {
  //     this._age = value
  //   }
  // }
})

console.log(obj);
obj.age = 20
console.log(obj.age);