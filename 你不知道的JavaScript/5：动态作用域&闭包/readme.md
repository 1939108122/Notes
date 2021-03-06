## 词法作用域： 作用域在代码书写的时候就划分了，作用域链沿着他定义的地方延伸。(也就是说在查找变量在定义的作用域查找)
## 动态作用域： 作用域在代码运行的时候划分，作用域链沿着它的调用栈往外延伸。

eval欺骗词法作用域
```js
function foo (str) {
  eval(str)
  console.log(name)
}

var name = 'deshan'
var str = 'var name = "xiuyan"'
foo(str)  //xiuyan
```

eval接收一个参数，并执行这段代码，相当于在 foo内部插入了这段代码 `var name = xiuyan`

```js
var a = 2

function foo() {
  console.log(a)
}

function bar() {
  var a = 1
  foo()
}

bar();  //2
```
## 闭包
有权访问另一个函数作用域中的变量的函数。

```js
function foo () {
  var b = 1
  function bar() {
    console.log(b)
  }
  bar();
}

foo()  //1
```
上面确实满足了一个函数bar访问另一个函数 foo作用域中的变量b，的确是闭包，但是不好观察。

```js
function fn1() {
  var a = 1
  function fn2() {
    console.log(a)
  }
  return fn2
}

var fn3 = fn1()
fn3()  //1
```
fn2的词法作用域访问了fn1的作用域中的变量

正常来说，fn1被调用之后，其作用域会被销毁，js的垃圾回收机制会回收这段内存，但是有了闭包并不会回收，因为fn2 仍然对fn1作用域的变量有引用，这个引用就是闭包。


## 闭包的应用
  模拟私有变量

```js
const User = (function(){

  let _password
  class User{
  constructor(username, password) {
    this.username = username
    _password = password
  }
  login () {
    console.log(this.username, _password)
  }
}
  return User
})()

let user = new User('舔狗', '123')
user._password  //undefined 访问不到

```

缺点：内存泄漏。一般来说，函数在被调用后，js会将这个作用域销毁，里面的变量占用的内存也会被释放，这就是js的垃圾回收机制，但是闭包不行，因为在外部调用了函数后，这个函数仍然对另一个函数作用域的变量有引用，造成这个函数的内存无法回收，这就是闭包的内存泄漏。


其他内存泄漏例子：

```js
function test() {
  a = '123'
}
// 当在非严格模式下, 定义变量 直接 a 而非 var a 时，会在全局var a 这样的话，即使test函数被调用完后也不会释放变量的内存，因为这个变量是全局的。
```

setTimeout和 setInterval 使用完没有清除定时器。