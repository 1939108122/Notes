var str = '深入浅出node.js'
var buf = new Buffer(str, 'utf-8')
console.log(buf)

// <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 64 65 2e 6a 73>

// var buf = new Buffer(10)
// console.log(buf)
  //<Buffer 00 00 00 00 00 00 00 00 00 00>