// ES6之前对象的属性名（key）
var foo = {
  // key:value
  name:'zhangsan',
  age:18,
  firend:{
    name:'lisi'
  }
}

// symbol的使用
// 生成的symbol值是唯一的 可以用来作为属性名 保证属性名不会重复
const s1 = Symbol();
const s2 = Symbol();

console.log(s1 === s2);

// ES10 symbol还有一个描述 (description)
const s3 = Symbol('abc');
console.log(s3.description);

// symbol值作为key
const obj = {
  [s1]:'aaa',
  [s2]:'bbb'
}

obj[s3] = 'ccc';
console.log(obj);