
https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA

防抖和节流

>在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用debounce（防抖）和throttle（节流）的方式来减少调用频率，同时又不影响实际效果。

今天重点讲讲防抖的实现。

>防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!


今天重点讲讲节流的实现
>节流的原理很简单：
如果你持续触发事件，每隔一段时间，只执行一次事件。
根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。
关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。