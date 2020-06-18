#### Set
> ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set本身是一个构造函数，用来生成 Set 数据结构。

```js
const set = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));

console.log(set)  // Set(4) { 2, 3, 5, 4 }
```
##### Set 方法
```js
// add 添加成员到Set结构
//  has  判断Set结构是否有该成员
// delete 删除Set结构的对应成员
//  判断 Set结构的 长度
let s = new Set()
s.add(1)
s.add(1)
s.add(2)
console.log(s) //Set(2) { 1, 2 }
console.log(s.has(2)) //true
console.log(s.delete(1)) //true
console.log(s) //Set(1) { 2 }
```

#### 使用Set去重

1. 数组去重
```js
let arr = [1, 1, 2, 4, 5, 6, 6]
let unique = [...new Set(arr)]
console.log(unique) //[1, 2, 4, 5, 6]
console.log(arr)  //[1, 1, 2, 4, 5, 6, 6]
```

2. 字符串去重

```js

let s = 'ababcc'

let unique = [...new Set(s)].join('')
console.log(unique) //'abc'
```
3. Array.from（可将 Set结构转为数组）
```js
let s = new Set([1,3,4,4,5,5])
let items = Array.from(s)
console.log(items)  //[1, 3, 4, 5]
```

4. 用 Array.from()手写数组去重方法

```js
function unique(arr) {
  let s = new Set(arr)
  return Array.from(s)
}

let array = [1, 2, 3, 3, 4, 4, 5, 5]
console.log(unique(array)) // [1, 2, 3, 4, 5]
```

#### WeakSet
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
**1、WeakSet 的成员只能是对象，而不能是其他类型的值。**
**2、WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。**
**3、WeakSet没有遍历和 size方法**
```js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)


```
#### Map

