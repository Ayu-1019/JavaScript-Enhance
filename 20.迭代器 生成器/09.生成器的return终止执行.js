function* foo(){
  const value1 = 1;
  console.log(value1);
  yield value1;

  return value1;
  const value2 = 2;
  console.log(value2);
  yield value2;

  const value3 = 3;
  console.log(value3);
  yield value3;

  const value4 = 4;
  console.log(value4);
} 

// return传值后这个生成器函数就会结束，之后调用next不会继续生成值了
const generator = foo();

console.log(generator.next());
console.log(generator.retrun(100));
console.log(generator.next());
console.log(generator.next());


