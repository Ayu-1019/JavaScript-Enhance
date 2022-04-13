// //
// function foo () {
//   var message = "zhangsan";
//   function bar () {
//     console.log("bar",message);
//   }
//   return bar;
// }
// var fun = foo();
// fun();

// let name = "fsd";
// function zzz(){
//   console.log(name);
// }

// zzz();


// function aaa (){
//   var a = 1;
//   function bbb(){

//     function ccc(){
//       console.log(a);
//     }

//   }

// }

// let x = aaa ();

// x();


// var name = "The Window";  
// var object = {  
//   name : "My Object",   
//   getNameFunc:function(){
//     return function(){
//       return this.name;
//     }
//   }
// };  
var name = "The Window";  
　　var object = {  
　　　　name : "My Object",  
　　　　getNameFunc : function(){  
　　　　　　return function(){  
　　　　　　　　return this.name;  
　　　　　};  
　　　　}   
}; 

// console.log(object.getNameFunc()());
// console.log(object.getNameFunc()()); //The Window