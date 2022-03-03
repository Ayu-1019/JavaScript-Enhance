// 默认绑定优先级最低
// new绑定 > 显示绑定(apply/call/bind) > 隐式绑定 >默认绑定
var obj = {
  message:'zhangsan',
  foo:function(){
    console.log(this);
  }
}

// 隐式绑定调用 
obj.foo(); // obj

// 显示绑定优先级高于隐式绑定
// 既有隐式绑定 也有显示绑定
obj.foo.call('abc'); // abc