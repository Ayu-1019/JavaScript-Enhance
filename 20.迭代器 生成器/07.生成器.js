// 生成器函数
function* foo(){
  const value1 = 1;
  console.log(value1);
  yield value1;

  const value2 = 2;
  console.log(value2);
  yield value2;

  const value3 = 3;
  console.log(value3);
  yield value3;
}

// 调用生成器函数时会返回一个生成器对象
const generator = foo();
console.log(generator);

generator.next();
generator.next();
generator.next();


