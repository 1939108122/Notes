## JavaScript中所有的对象都是 Object的实例， 并继承Object.prototype的属性和方法， 也就是说 Object.prototype是所有对象的爸爸
```js
function A (a) {
  this.a = a
}
```
 1. 在定义函数的时候， 会有一个 `prototype`属性（它是一个对象，包含了很多方法和属性）属于函数， 当用这个函数实例化一个对象时，比如： `var foo = new A('foo')`
这时候 foo会生成一个 _proto_ , 这个 _proto_就是指向 这个对象的构造函数的prototype, 也就是说:**foo._proto_ === A.prototype** 为 true

2. 既然说 `A.prototype` 是一个对象， 对象都是有一个属性为 _proto_，也就是说 `A.prototype._proto_` 这个对象是指向谁的呢，没错，就是指向
`Object.prototype.`
**console.log(Object.prototype.__proto__)**  结果为null


3. 当调取一个对象的属性时，会先在本身查找，若无，就根据 `proto` 找到构造原型，若无，继续往上找。最后会到达顶层`Object prototype`，它的 `proto` 指向null，均无结果则返回undefined，结束。
由 `proto` **串起的路径就是『原型链』**。



## 题目

```js
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
}
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);


//answer； 1  undefined  2  3
```


```js
function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); // 1
console.log(new B().a); // undefined
console.log(new C(2).a); // 2
```