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