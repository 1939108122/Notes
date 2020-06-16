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