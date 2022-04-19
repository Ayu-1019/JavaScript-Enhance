// 生成器
function* createArrayIterator (arr){
  // 1
  // let index = 0;
  // return {
  //   next:function(){
  //     if(index < arr.length){
  //       return { done:false, value:arr[index++ ] }
  //     } else {
  //       return { done:true, value:undefined }
  //     }
  //   }
  // }

  // 2
  // for(const item of arr){
  //   yield item;
  // }

  // 3
  yield* arr;
}

const names = ['abc', 'def', 'ghi'];
const namesIterator = createArrayIterator(names);

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

// 创建一个函数 可以迭代一个范围内的数字
// 10 20
function* createRangeIterator(start, end){

  let index = start; 
  while(index < end){
    yield index++;
  }

  // let index = start;
  // return {
  //   next:function(){
  //     if(index < end){
  //       return { done:false, value:index++ }
  //     } else {
  //       return { done:true, value:undefined }
  //     }
  //   } 
  // }
}

const rangeIterator = createRangeIterator(10,20);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// class案例
class Classroom{
  constructor(address, name, students){
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent){
    this.students.push(newStudent);
  }

  foo = () => {
    console.log('foo function');
  }

  [Symbol.iterator] = function*(){  
    yield* this.students;
  }
}

const classroom = new Classroom('3号楼3单元301','计算机教室',['tom', 'bob', 'lisa','james']);
for(const item of classroom){
  console.log(item);
}