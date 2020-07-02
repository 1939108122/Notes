## 类型判断
1. typeof
>typeof 是一元操作符，放在单个操作数的前面，返回值是操作类型的字符串。

Es6 七种类型： Number, String, Boolean,Null,Undefined,Symbol, Object

其中，Object 是引用类型，其他为基本类型，typeof 对这些类型分别判断出：

number，string, boolean, object, undefined, symbol, object

其中 null判断为 object, 还有 Object细分的一些类型除了
Function(typeof(()=>{}) 结果为function)以外，其他的比如Array， Date，Error， Rexp会被检测为 object.

为了将引用类型中的其他类型检测出来，所以就用到了 **Object.prototype.toString.call**


2. Object.prototype.toString.call()
```js
let string = Object.prototype.toString
console.log(string.call([1,2,3])) //[object Array]

let date = new Date()
console.log(string.call(date)) // [object Date]

console.log(string.call(null)) // [object Null]
```

#### 自己写一个判断类型的
```js
function judgeType(data, type)
{
  type = `[object ${type}]`
  return Object.prototype.toString.call(data) === type
}

console.log(judgeType([],'Array')) //true
```


3. typeof 和 Object.prototype.toString.call()区别

typeof 最多只能检测出 八种类型，而Object.prototype.toString.call()可以检测出至少十二种。



4. instanceof 

检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。


```js
var s = new String('1')

s instanceof String  //true

var a = new Array('[1, 2, 3]')
a instanceof Array //true
```



## typeof原理， 不同对象在底层都表示为二进制，在JavaScript中二进制前三位都为0则判断类型为object，null的二进制全为0，所以
typeof null 为 object