# 面试记录
## 雨花石一面
1. var let const
  let，const产生块级作用域，不能重复声明,不会绑定全局对象，var会绑定全局对象，var会变量提升，let,const变量提升后会处于一个暂时性死区，
2. 深浅拷贝
  浅拷贝如果拷贝的是基本数据类型就直接拷贝值，如果拷贝的是对象，是拷贝一个指向对象堆内存的地址指针。也就是说它们引用的还是同一个对象，浅拷贝例如
    - Object.assign()
    - Array.slice(),Array.concat()
    - 
    ```js
      function shallClone(target) {
        if(typeof(target) == 'object' && target !== null) {//拷贝的对象为引用类型
          let targetClone = Array.isArray(target) ? [] : {}
          for(let prop in target) {
            if(target.hasOwnProperty(prop)) { //是否是target的属性
              targetClone[prop] = target[prop]
            }
          }
        } else {
          return target
        }
      }
    ```
  深拷贝，简单来说就是拷贝一个一样的全新的对象，它和被拷贝对象没有关联

3. 谈谈promise，promise的优缺点
  - 解决回调地狱，
  - 一当
4. jsonp的原理及缺点
  script可以跨域，通过回调里携带参数，请求服务器后，服务器给到相应的参数，就可以请求了
  缺点： 只能用get，安全问题(容易受到xss攻击)
5. 一道算法题
6. vue和react在技术层面上你更喜欢哪个？(个人认为可以转化为挑一个框架，说说区别和优势)

## 纷享销客一二面
- 一
1. 内联标签和块标签分别有那些
  内联标签： a b span img strong input button label select textarea
  块标签：p div ul li h1~6
2. 说说em，rem, px
- px是虚拟长度单位，Windows系统默认是96dpi，Apple系统默认是72dpi。
- em是相对单位，通常1em = 16px，声明Font-size=62.5%，这就使em值变为16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
- rem也是相对长度单位， 它是相对于html根元素的大小来的
3. nextTick
4. 事件委托
- 二
1. 项目做了那些性能优化？(例如京东618界面如何优化)
  - 减少http请求
    1. js/css打包
    2. 图标使用iconfont
    3. 使用base64格式的图片
  - 减少静态资源的体积
    1. 静态资源的压缩
    2. 服务端开启gzip压缩，如果部署express作服务器的话，使用中间件compression即可开启gzip压缩
    3. 使用缓存，express.static()
2. 遇到了什么安全性问题？
3. express的缓存了解吗
express.static
4. promise解决异步的原理async的了解
5. 排序算法，复杂度怎么分析
快排平均时间复杂度O(nlogn),空间复杂度O(logn)
6. xss攻击怎么造成的，crsf攻击
  xss跨域脚本攻击，存储型()，反射型，DOM，
7. http1.0 1.1 2.0了解吗
  http1.0 
8. 深拷贝怎么解决循环引用的问题
  - 用个map记录一下，因为map的key允许为对象
9. osi七层模型
  - 应用层
  - 表示层
  - 会话层 DNS
  - 传输层 tcp/udp
  - 网络层 ip
  - 数据链路层
  - 物理层 
TCP/IP四层
  - 应用层
  - 传输层
  - 网络层
  - 网络接口层
五层模型
  - 应用层
  - 传输层 tcp/udp
  - 网络层 ip
  - 数据链路层
  - 物理层 
6. 伪类和伪元素
  - 伪类是DOM元素的一种特殊状态，例如:hover,
  :disabled 选择禁用的表单元素
  :checked 选择被选中的表单元素
  :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n
  :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数
  - 伪元素，
  ::after 已选中元素的最后一个子元素
  ::before 已选中元素的第一个子元素
  ::first-letter 选中某个款级元素的第一行的第一个字母
  ::first-line 匹配某个块级元素的第一行

7. 为什么会有微任务

## 大管加
1. 原型和原型链
  - 每个函数都有一个prototype属性，它指向函数的原型对象。
  - 当用new创建一个实例时，那么这个函数就是构造函数了，实例上有一个隐式原型_proto_，它指向构造函数的原型对象
  实例._proto_ -> 原型对象  原._proto_ -> 父级原型对象 -> Object -> null
  这样一条链条即使原型链
  hasOwnPrototype()检查对象自身是否含有某个对象
2. 作用域和作用域链
  作用域分为全局作用域，块级作用域， 函数作用域，作用域就是函数或变量可访问的范围
  作用域链就是查找变量从当前作用域查找，找不到就往父级作用域查找，依次往外查找，这样形成的一条链条就是作用域链
3. this指向
  默认绑定，隐式绑定，显式（硬）绑定， new绑定
4. vue生命周期
 before* create, mounted, update, destory
5. 异步请求有哪些
  fetch, ajax, promise, 回调函数， setTimeout， genertor

## 微医集团
1. 介绍一下项目
2. egg的进程你了解吗
  worker master agent
 - 进程崩了出了问题怎么办？
3. nextTick你觉得可以用什么来实现(个人promsie,setTimeout)
  nextTick就是异步的获取一个DOM节点，用mutationObserver+ 事件循环来实现
4. 微任务 宏任务

## 罗辑思维
1. 介绍项目
2. tarnsform怎么使用
3. 分页请求怎么做，url中携带参数
4. http1.0 1.1
5. 状态码 
6. ip地址改变了怎么办？DNS查询的方法
7. MD5之类的加密算法了解吗，用户名密码怎么做加密
8. webpack配置流程

## 帷幄（先来四道算法题）
1. 原型和原型链,查看原型链上是否有某个对象
2. redux的流程了解吗
3. 重排和重绘
  - 重绘就是当页面的样式改变，引起的页面部分更新，这样的一个更新就重绘
  - 重排就是页面的几何位置发生变化，重新构建布局树的过程
  - 重排影响性能，尽量避免重排的触发，多食用一些transform类的元素
4. react的key是干嘛的
5. diff算法怎么实现
6. for..in.. for..of

## 工猫二面
1. setState是同步的还是异步的
（聊天聊了半个多小时，没问啥技术）
## ES6
### promise
三个状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
.then 里的回调函数通过状态来执行相应的操作
```js
<script>
  function CutePromise(executor) {
    this.status = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCbs = [];   // 数组
    this.onRejectedCbs = [];    // 
    // 怎么知道 调用了：
    // resolve  -> fulfilled
    // reject   -> rejected
    let self = this;
    function resolve(value) {
      console.log('resolve called');
      self.status = 'fulfilled';
      self.value = value;
      // console.log('val', value);
      // 让 then onFulfilled 回调调用
      for (let fn of self.onFulfilledCbs) {
        fn(value);
      }
    }
    function reject(reason) {
      self.status = 'rejected';
      self.reason = reason;
      // // 让 then onRejected 回调调用
      for (let fn of self.onRejectedCbs) {
        fn(reason);
      }
    }
    executor(resolve, reject);
  }
  CutePromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    if (self.status === 'fulfilled') {
      onFulfilled(self.value);
    } else if (self.status === 'rejected') {
      onRejected(self.reason);
    } else if (self.status === 'pending') {
      // onFulfilled onRejected 先等着 等着 resolve() reject()
      // 才会执行
      self.onFulfilledCbs.push(onFulfilled);
      self.onRejectedCbs.push(onRejected);
    }
  }
  let p=new Promise((resolve, reject) => {
    // resolve(6666);
    // 成功时候的值 通过 resolve 传给
    // reject('err')
    setTimeout(() => {
      // 2000 => fulfilled
      resolve(6666);
    }, 2000)
  })

  let o =new Promise((resolve, reject) => {
    // resolve(6666);
    // 成功时候的值 通过 resolve 传给
    // reject('err')
    setTimeout(() => {
      // 2000 => fulfilled
      resolve(6);
    }, 1000)
  })
  // .then(() => {
  //   console.log('2th then')
  // })
  Promise.myAll = function (promises){
    return new Promise((resolve,reject) => {
      let count = 0
      let res = []
      for(let i=0;i<promises.length; i++){
        promises[i].then(x => {
          // console.log(x)
          count++
          res[i] = x
          if(count == promises.length){
            resolve(res)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    })
  }
  Promise.myAll([p,o]).then(x => {
    console.log(x)
  })
</script>
```

缺点： 一旦创建就无法停止；当promise处于pedding状态时，无法确定它是成功还是失败；如果不设置回调函数，promise内部的错误不会反应到外部；then实际也是返回一个promise，多次调用耗性能

### 