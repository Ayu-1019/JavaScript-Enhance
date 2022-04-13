// logical assignment operators
let n = 1;
n = n + 1;
n += 1;

// let msg = undefined;
// // 1.逻辑或赋值运算
// // msg = msg || 'default value';
// msg ||= 'default value';
// console.log(msg);

// 2.逻辑与赋值运算
const obj = {
  name:'zhangsan',
  foo:function(){
    console.log('foo被调用');
  }
}
obj.foo && obj.foo();

let info = {
  name:'zhangsan'
}
// info = info && info.name;
info &&= info.name;
console.log(info);

// 3.逻辑空赋值运算
// 只会判断null和undefined
let str = '';
str ??= 'default';
console.log(str);