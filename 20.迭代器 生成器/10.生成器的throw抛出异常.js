function* foo(){
  const value1 = 1;
  console.log(value1);
  yield value1;

  console.log('第二段开始执行');
  const value2 = 2;
  console.log(value2);
  yield value2;

  const value3 = 3;
  console.log(value3);
} 

const generator = foo();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


