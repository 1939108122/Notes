var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  var a = arr.toString().split(',').map(Number)
  return a
}

console.log(flatten(arr))