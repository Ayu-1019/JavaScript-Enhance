const names = ['abc','def','ghi'];
const name = 'zhangsan';

// 1.函数调用时
function foo (a,b,c,...args){
  console.log(a,b,c,args);
}

foo(...names);
foo(...name);

// 2.构建数组时
const newArr = [...names,...name];
console.log(newArr);

// 3.ES9构建对象字面量
const info = { name:'lisi', age:20 }
const obj = {...info,height:1.88}
console.log(obj);

// 展开语法进行的浅拷贝
const p1 = { 
  name:'wangwu', 
  age:32,
  friend:{
    name:'Richard'
  } 
}
const p2 = {...p1,address:'上海'}
console.log(p2);
p2.friend.name = 'kobe';
// p1.friend.name也发生改变
console.log(p1);