http://www.ruanyifeng.com/blog/2018/06/javascript-this.html

## 
https://juejin.im/post/59bfe84351882531b730bac2#heading-5

this 永远指向最后调用它的那个对象


this在箭头函数中指向它定义时所在的作用域

```js

var name = 'abc'

var foo = {
  name: 'def',

 hello:() => {
    console.log(this.name)
  }
}

foo.hello()  //abc
```

es6之前，只有全局作用域和函数作用域，此时的foo是处于全局作用域下的，所以this指向全局


箭头函数的this始终指向函数定义时的this,而非执行时， 箭头函数没有绑定this，必须通过查找作用域链来决定其值
如果箭头函数被非箭头函数包含，则箭头函数的this指向最近一层的非箭头函数的this，比如：

```js
var name = "全局"

  let obj = {
    name: 'obj的name',
    foo() {
      console.log(this.name ,'foo')  // obj的name，因为obj.foo()最后调用的是obj对象，所以this指向obj

      function bar() {
        console.log(this.name, 'bar' )  //windows.bar()最后调用的是windows 所以结果是  '全局'
      }
      bar();
    }
  }

  obj.foo();
```

```js
var name = "全局"

  let obj = {
    name: 'obj的name',
    foo() {
      console.log(this.name ) //obj的name

      var bar = () => {
        console.log(this.name)  //箭头函数没有绑定 this, 指向定义时的this，也就是foo这个函数下的this => obj, 答案为 obj的name
      }
      bar();
    }
  }

  obj.foo();
```


