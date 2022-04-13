// ES6之前想要拼接字符串和其他标识符
const name = 'zhangsan';
const age = 18;

console.log("my name is " + name + ", my age is " + age);

// ES6提供模板字符串
console.log(`my name is ${name}, my age is ${age}`);

console.log(`double age is ${age * 2}`);

function getDoubleAge(){
  return age * 2;
}
console.log(`double age is ${getDoubleAge()}`);