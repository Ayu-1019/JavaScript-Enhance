// Optional Chaining可选链
const info = {
  name:'zhangsan',
  firend:{
    name:'lisi',
    girlFriend:{
      name:'wangwu'
    }
  }
}

console.log(info.firend?.girlFriend?.name);