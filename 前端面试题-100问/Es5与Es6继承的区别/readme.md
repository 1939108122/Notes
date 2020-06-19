#### Es5与Es6继承区别

ES6 与 ES5 中的继承有 2 个区别，第一个是，ES6 中子类会继承父类的属性，第二个区别是，super() 与 A.call(this) 是不同的，在继承原生构造函数的情况下，体现得很明显，ES6 中的子类实例可以继承原生构造函数实例的内部属性，而在 ES5 中做不到。

证明：
1. ES5:
```js
function MyArray() {
  Array.call(this);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true
  }
});

var arr = new MyArray();
arr[0] = 12;
arr.length;
var colors = new MyArray();
colors[0] = "red";
colors.length;  //0没有继承到 length
```
2. ES6:
```js
class MyArray extends Array {
  constructor() {
    super();
  }
}
var arr = new MyArray();
arr[0] = 12;
arr.length;  //1 继承了内部属性length

```


#### 总结：
最重要的一点是继承机制完全不同，es5是先创建子类实例对象的this，然后将父类方法赋到这个this上。es6是先在子类构造函数中用super创建父类实例的this,再在构造函数中进行修改它。
也因此，es5中array，error等原生构造函数无法继承而es6就可以自己定义这些原生构造函数。
（es5中子类无法拿到父类的内部属性，就算是apply也不行，es5默认忽略apply传入的this）。
es5/6还有一些区别:
1.es6的类内部定义的所有方法都不可枚举，这在es5中默认是可枚举的，甚至可不可枚举都可以用defineProperty配置；
2.es6内部默认使用严格模式；
3.类内不存在变量提升，这个跟继承有关，必须保证子类在父类之后定义，如果允许变量提升就乱套了；
4.es5的实例属性只能写在构造函数里，es6直接写在类里就行。
