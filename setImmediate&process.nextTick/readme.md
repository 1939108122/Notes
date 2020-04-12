1. setImmediate() 和 process.nextTick() 都是非I/O的异步API，
不过  process.nextTick()中的回调函数执行的优先级要高于setImmediate（）
原因就是 事件循环对观察者的检查是有先后顺序的， process.nextTick()属于idle观察者，
setImmediate（）属于check观察者， 在每一个轮循环检查中， idle观察者先于I/O观察者，I/O观察者先于check观察者

2. 在具体实现上, process.nextTick() 的回调函数 保存在一个数组中， setImmediate()的结果则是保存在链表中，
在行为上， process.nextTick()会在每轮循环中会将数组中的回调函数全部执行， 而setImmediate()在每轮循环执行链表中的
一个回调函数（这样做的目的是保障每次循环可以较快的执行结束，防止CPU占用过多而阻塞后续I/O调用的情况）

