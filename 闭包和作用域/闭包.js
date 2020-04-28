// var foo = function() {
//   var local = '局部变量';
//   (function () {
//     console.log(local)
//   }())
//   // return function() {
//   //   console.log(local)
//   // }
// };
// foo(); //局部变量

//  在JavaScript中，实现外部作用域访问内部作用域中变量的方法叫做闭包（closure）,
//  这得益于高阶函数的特性，函数可以作为参数或者返回值。
var foo = function() {
  var bar = function() {
    var local = '局部变量'

    return function() {
      return local
    }
  };
  var baz = bar();
  console.log(baz());
};
foo();


// 一般而言，在bar()函数执行完成后，局部变量local将会随着作用域的销毁而被回收，
// 但是注意到这里的特点在于返回值是一个匿名函数,且这个函数具备了访问local的条件，
// 虽然在后续的执行中，在外部作用域还是无法直接访问local，但是若要访问它，只要通过这个中间函数稍作周转即可。
