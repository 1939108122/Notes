// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ]);
// console.log(set)

// const m1 = new Map(set);
// console.log(m1)


// // const map = new Map();

// // map.set('a', 555);
// // console.log(map.get('a')) 
// // console.log(map)

// const myMap = new Map()  //Map转为数组
//   .set(true, 7)
//   .set({foo: 3}, ['abc']);
//  var a = [...myMap]
//  console.log(myMap.get({foo: 3}))
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]


//Map转为对象
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

console.log(strMap(myMap))
