// process.nextTick(function () {
//   console.log('延迟执行')
// })
// setTimeout(function(){
//   console.log('33')
// },0)
// console.log('正常执行') 

// process.nextTick(function () {
//   console.log('nextTick延迟执行')
// })
// setImmediate(function () {
//   console.log('Immediate延迟执行')
// })
// console.log('正常执行') 

// 加入两个nextTick的回调函数
process.nextTick(function () {
  console.log('nextTick1延迟执行')
})
process.nextTick(function () {
  console.log('nextTick2延迟执行')
})

// 加入两个setImmediate的回调函数 
setImmediate(function () {
  console.log('Immediate延迟执行1')

  // 进入下一次循环
  process.nextTick(function () {
    console.log('强行插入')
  })
})
setImmediate(function () {
  console.log('Immediate延迟执行2')
})
console.log('正常执行') 