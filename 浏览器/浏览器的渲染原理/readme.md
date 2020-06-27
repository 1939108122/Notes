## 浏览器的渲染原理
1. 构建DOM树，浏览器会根据获取到的文档解析 html/svg/xhtml，也就是遍历文档节点来构建一个DOM树
      解析文档生成DOM树的过程会因CSS或者JS的加载而阻塞。
      `display：none` `注释` `script`也会在 DOM树中。

2. 生成CSS 规则树，对CSS进行解析生成 CSS Rule树。
    CSS解析可以和DOM树解析一起执行

3. 构建 Render Tree。 根据DOM树和 CSS规则树构建 渲染树， 浏览器会从DOM树的根节点开始遍历，同时给每个节点挂上css样式。
    渲染对象与DOM树对应，但不是一一对应，有些比如（Header，display：none）没必要渲染。

4. layout/reflow  生成渲染树之后，进行布局，因为不知道这些节点在页面的哪个位置，所以要进行布局，也可以叫做回流（重排）。
    布局阶段会从渲染树的根节点进行遍历，渲染树的每个节点叫做渲染对象，包含宽高、颜色等，确定每个节点在页面上的精确的位置和大小
    float  absolute fixed 会发生位置偏移
    我们常说的脱离文档流其实是脱离渲染树。

5. paint/绘制: 遍历渲染树来画出内容显示在页面上(由浏览器的后端UI组件完成的)。


注意： 为了有更好的用户体验，浏览器并不会等到整个HTML文档解析完毕之后在进行渲染绘制，它会一边解析一边渲染绘制，先呈现一部分
内容到页面上。


## 浏览器构建DOM树遇到 JavaScript怎么办？

构建DOM树的过程中，遇到JavaScript，会暂停解析，交给JavaScript引擎来执行js，js中会修改DOM，甚至操作CSSOM修改样式，当js操作的CSSOM还没有构建的时候，会先去构建CSSOM，这样严重影响了DOM树的构建，因为要等到JavaScript执行完成才从上次暂停的地方来构建DOM树，
大大增加了首屏渲染时间，会让白屏时间更长，所以`<script>`会放在`<body>`标签的最底部，先生成CSSOM和DOM再去执行JavaScript，或者
`script`标签加上`defer`属性或者 `async`,也可以服务器渲染（浏览器不用执行js）

## 回流（重排）reflow
  当渲染树的一部分因为元素几何尺寸，一些属性而改变布局要引发重新构建的操作，叫做回流。
  比如： `display：none`,添加删除DOM，margin、padding变化，resize、input框内容变化，注意：页面第一次渲染也有一次reflow。

  **获取一些特定属性的值：clientWidth、clientHeight、scrollWidth、scrollHeight**
  因为这些值都是浏览器即时计算的值，所以需要进行回流。

## 重绘（repaint）
当更新元素的属性时，只改变了外观比如颜色，不影响到布局时，就需要进行重绘。
reflow回流必定引起repaint重绘，重绘可以单独触发。（回流成本比重绘高）

## 减少回流次数

1. 样式文件应当在head标签中，而脚本文件在body结束前，这样可以防止阻塞的方式。
2. 尽量使用transform 而不是top改变位置
3. css选择器尽量嵌套层数少
4. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。
5. 尽量少使用dispaly:none，可以使用visibility:hidden代替，dispaly:none会造成重排，visibility:hidden会造成重绘。
6. 不使用table布局，一个小小的操作可能引起回流和重绘。