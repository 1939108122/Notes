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
>ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

1. 方法

  （1）**size 属性**
  ```js
  const map = new Map();
  map.set('foo', true);
  map.set('bar', false);

  map.size // 2
  ```

  (2) **Map.prototype.set(key, value)**
  set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

  ```js
  const m = new Map();

  m.set('edition', 6)        // 键是字符串
  m.set(262, 'standard')     // 键是数值
  m.set(undefined, 'nah')    // 键是 undefined
  ```
  get、has、delete...

2. 与其他数据结构的互相转换
   （1）Map 转为数组
   ```js
   const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
    [...myMap]
    // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
   ```
  （3）Map 转为对象

  如果所有 Map 的键都是字符串，它可以无损地转为对象。
  ```js
    function strMap (map) {  
    let obj = Object.create(null)
    for(let [k, v] of map)
    {
      obj[k] = v
    }
    return obj
  }

  const myMap = new Map()
  myMap.set('true', 1)
  myMap.set('false', 2)

  console.log(strMap(myMap))  //{ true: 1, false: 2 }
  ```

#### WeakMap

  WeakMap与Map的区别有两点。

  1. 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
  ```js
  const map = new WeakMap();
    map.set(1, 2)
    // TypeError: 1 is not an object!
    map.set(Symbol(), 2)
    // TypeError: Invalid value used as weak map key
    map.set(null, 2)
    // TypeError: Invalid value used as weak map key
  ```
  2. 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
  3. 没有遍历操作



### 总结
Set
1.成员不能重复
2.只有键值，没有键名，有点类似数组。
3. 可以遍历，方法有add, delete,has
weakSet

成员都是对象
成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏
不能遍历，方法有add, delete,has
Map
本质上是健值对的集合，类似集合
可以遍历，方法很多，可以干跟各种数据格式转换
weakMap
1.只接受对象作为键名（null除外），不接受其他类型的值作为键名
健名所指向的对象，不计入垃圾回收机制
不能遍历，方法同get,set,has,delete