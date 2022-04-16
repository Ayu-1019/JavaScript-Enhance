// 封装一个响应式的函数
function watchFn(fn){ 
  reactiveFns.push(fn);
}

const reactiveFns = [];

const obj = {
  name:'zhangsan',
  age:18
}

function foo(){
  const newName = obj.name;
  console.log('你好');
  console.log(obj.name, 'foo function');
}

function bar(){
  console.log('普通的其他函数');
  console.log('这个函数不需要有任何响应式');
}

watchFn(foo);

watchFn(function demo(){
  console.log(obj.name,'demo function');
});

obj.name = 'lisi';
reactiveFns.forEach(fn => {
  fn();
})