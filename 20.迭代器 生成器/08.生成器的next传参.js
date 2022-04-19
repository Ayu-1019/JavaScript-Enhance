// 生成器函数
function* foo(){
  const value1 = 1;
  console.log(value1);
  const n = yield value1;

  const value2 = 2;
  console.log(value2 + n);
  yield value2;

  const value3 = 3;
  console.log(value3);
  yield value3;

  const value4 = 4;
  console.log(value4);
}

// 调用生成器函数时会返回一个生成器对象
const generator = foo();
console.log(generator);

generator.next();
generator.next(100);
generator.next();
generator.next();


