// 1.for...of

// 2.展开语法
const names = ['abc', 'def', 'ghi'];

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

const arr = [1, 2, 3, ...iterableObj]
console.log(arr);

// 3.解构语法
const [ name1, name2 ] = names;