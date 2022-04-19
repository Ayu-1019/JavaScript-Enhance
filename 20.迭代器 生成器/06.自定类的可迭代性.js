// 创建一个教室类 创建出来的对象都是可迭代对象
class Classroom{
  constructor(address, name, students){
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent){
    this.students.push(newStudent);
  }

  [Symbol.iterator](){
    let index = 0;
    return {
      next:() => {
        if(index < this.students.length){
          return { done:false, value:this.students[index++] }
        } else {
          return { done:true, value:undefined }
        }
      },

      return: () => {
        console.log('迭代器终止了');
        return { done:true, value:undefined }
      }
    }
  }
  
}

const classroom = new Classroom('3号楼3单元301','计算机教室',['tom', 'bob', 'lisa','james']);
classroom.entry('richard');
for(const stu of classroom){
  console.log(stu);
  if(stu == 'james') break;
}
// console.log(classroom);

function Person(){

}

Person.prototype[Symbol.iterator] = function(){
  
}