let obj = {
  a: 1,
  b: 2,
  c: 3
}
let {a, b, c} = obj//{}里面必须和对象属性名一样否则输出undefined

console.log(a, b, c) // 1 2 3


// 也可以这样
let foo = {
  x: 4,
  y: 5,
  z: 6,
  d: 7
}

let {x,y, ...rest} = foo
console.log(x, y, rest) // 4 5 { z: 6, d: 7 }