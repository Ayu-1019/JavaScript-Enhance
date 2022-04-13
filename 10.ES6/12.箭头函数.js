function foo (){

}

console.log(foo.prototype);

const p = new foo();
// p.__proto__ = foo.prototype

const bar = () => {

}

console.log(bar.prototype);