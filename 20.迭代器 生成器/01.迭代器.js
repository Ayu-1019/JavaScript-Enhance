// 编写一个迭代器
// const iterator = {
//   next: function(){
//     return {
//       done:true,
//       value:1
//     }
//   }
// }

// 数组
const names = ['abc', 'def', 'ghi'];

// 创建一个迭代器对象来访问数组
let index = 0;
const namesIterator = {
  next: function(){
    // return { done:false,value:'abc' }
    // return { done:false,value:'def' }
    // return { done:false,value:'ghi' }
    // return { done:true,value:undefined }
    if(index < names.length){
      return { done:false, value:names[index++ ] }
    } else {
      return { done:true, value:undefined }
    }
  }
}

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next()); // done：true value：undefined

