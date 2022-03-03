var message = 'zhangsan';

var foo = () => {
  console.log(this);
}

var obj = {
  foo:foo
}

foo();
obj.foo();
foo.call('abc');