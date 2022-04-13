const obj = {
  name:'zhangsan',
  age:18
}

const entries = Object.entries(obj);
console.log(entries); 

// 将entries转回对象
const newObj = {};
for(const entry of entries){
  newObj[entry[0]] = entry[1];
}
console.log(newObj);

// ES10新增 Object.fromEntries
console.log(Object.fromEntries(entries));

// 应用场景
const queryString = 'name=zhangsan&age=18';
const queryParams = new URLSearchParams(queryString);
const paramsObj = Object.fromEntries(queryParams);
console.log(paramsObj);