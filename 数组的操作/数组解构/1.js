// 数组解构

let arr1 = [1, 2, 3]
let x, y, z

// 原来写法
// x = arr[0]
// y = arr[1]
// z = arr[2]

// Es6数组解构
[x, y, z] = arr1

console.log(x, y, z) //1 2 3


// 也可以这样

let arr2 = [1, 2, 3, 4]
let [a, ...b] = arr2
console.log(a, b)  //1 [ 2, 3, 4 ]