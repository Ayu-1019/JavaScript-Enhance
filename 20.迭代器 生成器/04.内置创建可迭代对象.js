const names = ['abc', 'def', 'ghi'];
console.log(names[Symbol.iterator]);

const iterator1 = names[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// Set/Map
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set[Symbol.iterator]);
for(const item of set){
  console.log(item);
}

// 函数中的arguments也是可迭代对象
function foo (a, b, c, d){
  console.log(arguments);
  for(const arg of arguments){
    console.log(arg);
  }
}

foo(1, 2, 3, 4);

