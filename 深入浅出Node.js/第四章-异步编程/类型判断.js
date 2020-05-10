var toString = Object.prototype.toString
var isString =function (obj) {
  return toString.call(obj) == '[object String]'
}
console.log(isString(1))