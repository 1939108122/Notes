## 基本数据类型的值不可变
```js
let s = 'abc'
s[0] = 'f'
console.log(s) // 'abc'
```

## 引用类型值可变

```js
let a = [1,2,3]
a[0] = 4
console.log(a)  //[4,2,3]
```
## 基本类型的比较是值的比较

```js
let a = 1
let b = 1

console.log(a === b)  //true
```

## 引用类型的比较是引用的比较(就是比较保存在栈内存的指针是否指向同一个对象)

```js
let a = [1, 2, 3]
let b = [1, 2, 3]
console.log(a === b); // false
```

## 传值
## 基本数据类型的赋值是在栈内存中重新开辟一个空间，把变量存放其中，再把值赋值给新变量，所以这两个变量是两个独立互不影响的变量。

```js
let a = 10
let b = a
a++
console.log(a) //11
console.log(b) //10
```

## 传址
## 引用类型的赋值其实是指针的指向改变，也就是说赋值后两个变量都指向同一个对象，所以两者之间操作会有影响。

```js
let a = {}
let b = a
b.name = 'foo'

console.log(a.name) // foo
console.log(b.name) // foo

a.age = 18
console.log(a.age)  // 18
console.log(b.age)  // 18
 
console.log(a === b) // true
```

## 浅拷贝就是仅仅复制引用(指针), 拷贝后的对象发生变化，原对象也会变化。
## 深拷贝就是对目标的完全拷贝，不像浅拷贝只是复制了一层引用，深拷贝两个对象互不印象。

## 数组的深拷贝(不影响原数组)
1. slice

```js
let a = [1,2,3]
a.slice(1) //[2, 3]
console.log(a) //[1,2,3]
```

2. concat

```js
let a = [1,2,3]
a.concat(4,5) //[1,2,3,4,5]
console.log(a) //[1,2,3]
```
3. join

```js
let a = [1,2,3]
a.join('') //"123"
console.log(a) //[1,2,3]
```

4. split

```js
let s = "123"
s.split('') // ['1', '2', '3']
console.log(s) // "123"
```

## 数组的浅拷贝(会改变原数组)

1. pop()
2. splice()
3. reverse()
4. sort()
5. unshift()
6. map(前提是数组存储的是对象)

```js
  let arr = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'},
  ]
  arr.map((item) => {
    item.name = 'd'
  })
console.log(arr)
  // (3) [{…}, {…}, {…}]
// 0: {name: "d"}
// 1: {name: "d"}
// 2: {name: "d"}
```

## 对象的深拷贝
1. 定义一个新的对象并遍历新的属性去实现深拷贝


```js
var obj = {
    name:'wsscat',
    age:0
}

var obj2 = new Object();
obj2.name = obj.name;
obj2.age = obj.age

obj.name = 'autumns';
console.log(obj);//Object {name: "autumns", age: 0}
console.log(obj2);//Object {name: "wsscat", age: 0}
```

2. JSON.parse(JSON.stringify())

```js
var obj1 = {
    a:1,
    b:[1,2,3]
}
var str = JSON.stringify(obj1)
var obj2 = JSON.parse(str)
console.log(obj2); //{a:1,b:[1,2,3]}
obj1.a=2
obj1.b.push(4);
console.log(obj1); //{a:2,b:[1,2,3,4]}
console.log(obj2); //{a:1,b:[1,2,3]} 
```

这个的缺点  属性丢失
```js
const originObj = {
  name:'axuebin',
  sayHello:function(){
    console.log('Hello World');
  }
}
console.log(originObj); // {name: "axuebin", sayHello: ƒ}
const cloneObj = JSON.parse(JSON.stringify(originObj));
console.log(cloneObj); // {name: "axuebin"}
```

