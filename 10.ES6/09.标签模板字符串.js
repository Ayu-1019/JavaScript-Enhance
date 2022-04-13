function foo(a,b){
  console.log(a,b);
}

foo('hello','world');

// 另外调用函数的方式：标签模板字符串
const name = 'zhangsan';
const age = 20;
foo`hello${name}wo${age}rld`