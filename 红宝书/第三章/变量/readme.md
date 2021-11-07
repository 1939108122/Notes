## 变量
### var 声明作用域
使用 `var `操作符定义的变量会成为包含它函数的**局部变量** 比如，使用`var`在一个函数内部定义一个变量，那么就意味着该变量将在函数退出时被销毁。
```js
function test() {
    var message = 'hi';
    console.log('内部' + message);
}
test();  //内部hi
console.log('外部' + message); //message is not defined
```
### var 声明提升
使用`var`关键字会自动将变量提升到函数作用域的顶部
```js
function foo() {
    console.log(a);
    var a = '1';
}
foo(); //undefined
```
以上代码等价于
```js
function foo() {
    var a;
    console.log(a);
    a = '1';
}
foo(); //undefined
```
使用let则不会进行变量提升 会报错
```js
// let 报错
function foo() {
    console.log(a);
    let a = '1';
}
foo(); // ReferenceError: Cannot access 'a' before initialization
```