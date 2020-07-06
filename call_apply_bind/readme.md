#### Apply、Call、Bind

参考：https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more

> 这三个函数存在的意义，答案是改变函数执行的上下文，简单来说是改变函数运行时的this指向。

**function.call(thisArg, arg1, arg2, ...)**

>参数： thisArg：第一个参数都是要改变上下文的对象，如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象。

#####call、apply的区别

>他们俩之间的差别在于参数的区别，call和aplly的第一个参数都是要改变上下文的对象，而call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

## call、apply 和 bind的区别，call、apply改变完this指向后会执行目标函数func，并将目标函数的返回值返回，没有则为undefined，
## 而bind并不会执行目标函数，返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

```js
fn.call(obj, arg1, arg2, arg3...);
fn.apply(obj, [arg1, arg2, arg3...]);

```

##### 求数组中的最大和最小值

```js
var arr = [12,3,5,33,65,75,1]

Math.max.apply(Math, arr)
Math.max.call(Math, 12,3,5,33,65,75,1)

Math.min.apply(Math, arr)
Math.min.call(Math, 12,3,5,33,65,75,1)
```
##### 将伪数组转化为数组
```js
var arrlike = {
  0: '小白',
  1: '小红',
  2: '小刘',
  length: 3
}

Array.prototype.slice.call(arrlike)

Array.prototype.push.call(arrlike, '小青')
```
**判断变量类型**

```js
function isType(type, data) {
      type = `[object ${type}]`;
      return Object.prototype.toString.call(data) === type;
    }
  console.log(isType('Array', []))  //true
```
**利用call和apply做继承（也可以说是利用Object.create继承）**

```js
var Person = function (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.showAttr = function () {
  console.log('继承')
}
var Man = function (name, age) {
  Person.call(this, name, age)
}

var woMan = function (name, age) {
  Person.apply(this, arguments)
}
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;


var boy = new Man('彭于晏', 35)

var girl = new woMan('张豆豆', 23)



```