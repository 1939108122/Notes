
// var声明作用域
function test() {
    var message = 'hi';
    console.log('内部' + message);
}
test();  //内部hi
console.log('外部' + message); //message is not defined

// var 变量提升
function foo() {
    console.log(a);
    var a = '1';
}
foo(); //undefined