// 创建一个迭代器对象来访问数组
const iterableObj = {
  names:['abc', 'def', 'ghi'],
  [Symbol.iterator]:function(){
    let index = 0;
    return {
      next: () => {
        if(index < this.names.length){
          return { done:false, value:this.names[index++ ] }
        } else {
          return { done:true, value:undefined }
        }
      }
    }
  }
}

console.log(iterableObj[Symbol.iterator]);

const iterator = iterableObj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for...of可以遍历的东西必须是一个可迭代对象
const obj = {
  name:'zhangsan',
  age:18
}
// for(const item of obj){
//   console.log(item);
// }

for(const item of iterableObj){
  console.log(item);
}