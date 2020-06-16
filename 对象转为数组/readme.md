**对象转为数组**
```js
let obj = {'未完成':5, '已完成':8, '待确认':4, '已取消':6}
var arr = []

for (let i in obj)
{
  var o = {}
   o[i]= obj[i]
 arr.push(o)
}
console.log(arr)

// answer
(4) [{…}, {…}, {…}, {…}]
0: {未完成: 5}
1: {已完成: 8}
2: {待确认: 4}
3: {已取消: 6}
length: 4
```

**数组转为对象**

1. 用map
```js
arr = [
  {name: '小白', age: 21},
  {name: '小红', age: 22},
  {name: '小兰', age: 23},
]
let obj = {}

arr.map((e) => {
  obj[e.name] = e.age
})
console.log(obj)

//answer
{小白: 21, 小红: 22, 小兰: 23}
小兰: 23
小白: 21
小红: 22
```
2. 用for of
```js
arr = [
  {name: '小白', age: 21},
  {name: '小红', age: 22},
  {name: '小兰', age: 23},
]
let obj = {}

for (let item of arr)
{
  obj[item.name] = item.age
}
console.log(obj)
```