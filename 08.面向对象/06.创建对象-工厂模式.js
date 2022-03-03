// 工厂模式
function createPerson(name, age, height){
  var p = {};
  p.name = name;
  p.age = age;
  p.height = height;
  return p;
};

var p1 = createPerson('zhangsan',18,1.88);
var p2 = createPerson('lisi',20,1.80);
var p3 = createPerson('wangwu',14,1.70);
console.log(p1);
console.log(p2);
console.log(p3);