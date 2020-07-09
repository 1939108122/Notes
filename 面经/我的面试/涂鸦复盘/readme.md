## 怎么理解React
  React是FaceBook开源的一个UI框架，它是一个用于构建JavaScript界面的UI库，
  React的特点就是一切皆为组件，组件化可以让代码不再冗长，逻辑清晰，更重要的
  是增强复用性。
  React是一个数据自顶向下的框架，它是单向数据流, 单向数据流的好处就在于可追溯、
  利于测试、代码维护性高，简单举个栗子，父组件维护一个状态（拥有数据），通过props
  传递给子组件，假设react不是单向数据流，子组件可以随意更改父组件的状态，那么父组件
  就不容易察觉状态更改，这样的话容易造成混乱，不利于代码调试。单项数据流的话，状态只有父组件可以修改，
  子组件想要修改数据，要将修改的数据传递到父组件来更改，这样的话状态变的稳定，本质上来说子组件就是
  一个纯函数，没有任何副作用，这样代码的维护性就高了，容易测试。
  
  渲染模板为jsx，一种react独有的JavaScript和XML的结合模板，
  为什么使用 jsx ？因为UI逻辑和渲染逻辑是耦合的， 比如在input输入框中需要实时
  知道数据的变化，则要绑定事件通知state来更新数据来通知UI展示最新的数据。

## ReactV16.3之后的生命周期函数
  抛弃了 `componentWillMount、componentWillReceiveProps、componentWillUpdate`
  新增   `getDerivedStateFromProps(代替componentWillReceiveProps)、 getSnapshotBeforeUpdate`

  componentWillMount： 之前有许多开发者为了能让数据早些获取把数据请求放在这个函数里头，以便让首页加载白屏问题解决，
  但是执行这个函数异步还没有获取到数据时，首次 render就已经开始了，还是无法解决问题。
  而且 自从React启用了 React fiber后 在render之前的生命周期函数 都可能调用多次，如果请求数据调用多次那就会非常混乱了。
  所以这个生命周期函数会在 17版本被移除，目前还可以使用，不过使用了 控制台会报 警告要把次函数前面加上 unsafe_，所以推荐
  把数据请求放在 `componentDidMount`。

  componentWillReceiveProps: 通过比较前后 props来更新 state,如果这样的话就违反了react单向数据流的规则，会让组件的状态变得
  不可预测，显然这样不对， 所以才引入了 `getDerivedStateFromProps`
  ```js
  //  before
componentWillReceiveProps(nextProps) {
  if (nextProps.isLogin !== this.props.isLogin) {
    this.setState({	
      isLogin: nextProps.isLogin,	
    });
  }
  if (nextProps.isLogin) {
    this.handleClose();
  }
}

// after
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.isLogin !== prevState.isLogin) {
    return {
      isLogin: nextProps.isLogin,
    };
  }
  return null;
}

componentDidUpdate(prevProps, prevState) {
  if (!prevState.isLogin && this.props.isLogin) {
    this.handleClose();
  }
}
  ```

  可以看出，`getDerivedStateFromProps`是一个 静态（static）函数，也是一个纯函数（输出完全由输入决定），
  他只做他自己的事情，也就是比较前后两个props是否相同，不像 `componentWillReceiveProps`除了比较还做了一些
  比如说页面关闭之类的事， 16.3版本之后，这些回调会统一放到 `componentDidUpdate`函数中，使代码逻辑更加清晰，保证不被调用多次。
  另外，`getDerivedStateFromProps`由于是 `static`函数，访问 this将为 undefined，这样的好处是比较props时，
  保证是使用的当前的props来更新。
  注意： 16.3版本的`getDerivedStateFromProps`只在 初始化和 父组件引发的updating ，16.4就改成了无论是 父组件还是子组件引起
  的都会调用此函数。


  componentWillUpdate： 这个也是一样，有些人会把触发的一些回调函数放在这里，为了保证不被调用多次，统一放在
  `componentDidUpdate`，另外，componentWillUpdate会在Dom进行更新之前读取Dom信息返回给 componentDidUpdate,但是
  由于React异步渲染,可能导致 ComponentDidUpdate接收到componentWillUpdate的Dom信息和render之后的Dom不一样，
  所以引入了 新的 `getSnapShotBeforeUpdate`, 它在Render之后执行，保证ComponentDidUpdate接收到的Dom信息与getSnapShotBeforeUpdate传过来的一致。
  
  Mounting （挂载）阶段

  1. constructor： 接收props,  初始化state和一些方法
  2. getDerivedStateFromProps: 对比前后Props返回一个对象来确定是不是要更新（返回null就不更新）
  3. render： 组件挂载阶段
  4. componentDidMount： 组件挂载到页面之后执行，一般在这执行 数据请求
  

  Updating（更新）阶段
  1. getDerivedStateFromProps：同上
  2. shouldComponentUpdate： 组件在更新前，会自动被执行，返回一个布尔值来判断组件是否要更新，就是是否要进行接下来的生命周期函数。
      这里可以优化性能，因为这里是判断是否要进行接下来的render方法丛重新描绘dom,dom操作特别消耗性能，如果在这里优化diff可以极大的
      提高性能。
  3. render： 用diff算法对比前后虚拟dom，并修改真实Dom
  4. snapShotBeforeUpdate: 读取dom信息返回给componentDidUpdate使用
  5. componentDidUpdate： 组件更新之后立即执行。会进行执行一些`getDerivedStateFromProps`和要更新props后的一些回调函数，

  UnMounting（卸载）阶段
  componentWillUnmount： 在组件即将被移除的时候执行，用于清理内存空间。

## let、const 、var
var 和 let/const区别
1. 变量提升
2. 块作用域
3. 不可重复声明



## 变量提升
var 会进行变量提升，例如：
```js
  a = 2
  console.log(a) //2
  var a   
```
因为在编译阶段会将所有的变量还有函数声明先处理，
比如 var a 会在编译阶段移动到了最上面，所以输出2

```js
console.log(a)
var a = 2  //undefined
```
  这是因为同样js引擎在编译阶段将声明提升到了最上面，
  而赋值操作留在了原地等待执行阶段执行，相当于以下代码：

```js
  var a
  console.log(a) //undefined
  a = 2 
```
var 换成 let/const
```js
console.log(a)  // ReferenceError: Cannot access 'a' before initialization
let a = 2  //或者const 
```

这是因为 let 和 const 不会进行变量提升，这里有个临时死区（TDZ）
使用 let 或 const 声明的变量，在声明没有到达之前，访问该变量都会导致报错。

## 块级作用域（存在于函数内部以及 {}里面）
```js
  for (var i =0; i< 3; i++)
  {
    var i = 'abc'
    console.log(i)  //   abc
  }
```
```js
   for (let i =0; i< 3; i++)
  {
    let i = 'abc'
    console.log(i)  
  }
  //   abc
  //   abc
  //   abc
```
在使用var时，虽然for循环有三次迭代，但其实他是一个共享的全局作用域，
到最后只有一个i，所以循环结束后才输出 一个 abc
使用 let 时，会给每个迭代创建一个块作用域，这样就可以输出三个abc

## 重复声明
```js
var a = 1
var a = 2 
console.log(a)  // 2 
```
```js
var a = 1
let a = 2 
console.log(a) //报错 a已经定义
```
var 可以重复声明，let和const不行


