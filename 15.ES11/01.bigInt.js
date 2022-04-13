// 在ES11之前
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt);
console.log(maxInt + 1);
console.log(maxInt + 2);

// ES11 bigInt 最后要加上一个 n
const num = 900719925474099100n;
console.log(num);

// 报错
// console.log(num + 10);

// 加上n 相同类型
const num2 = 111;
console.log(num + 10n);
console.log(num + BigInt(num2));