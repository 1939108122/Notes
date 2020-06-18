// const set = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => set.add(x));

// console.log(set)

// // 数组去重

// var arr = [1,1,3,4,5,5]

// var unique = [...new Set(arr)]
// console.log(unique) //[1, 3, 4, 5]

// // 字符串去重
// var s = [...new Set('abbacc')].join('')
// console.log(s) //'abc'


// let s = new Set()
// s.add(1)
// s.add(1)
// s.add(2)
// console.log(s) //Set(2) { 1, 2 }
// console.log(s.has(2))
// console.log(s.delete(1))
// console.log(s)


function unique(arr) {
  let s = new Set(arr)
  return Array.from(s)
}

let array = [1, 2, 3, 3, 4, 4, 5, 5]
console.log(unique(array)) // [1, 2, 3, 4, 5]