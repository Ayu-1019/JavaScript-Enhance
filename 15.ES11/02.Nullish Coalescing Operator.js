// Nullish Coalescing Operator
// 空值合并运算 ??
// ||运算符 0 null undefined都为true
// ??运算符 只会判断null和undefined 数字0不会判断

// const msg = undefined;
const msg = 0;
const result = msg || 'default value';
const result2 = msg ?? 'default value';

console.log(result);
console.log(result2);