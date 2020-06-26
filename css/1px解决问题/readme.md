在一些 Retina屏幕的机型上，移动端页面的 1px会显得很粗，看起来不止1px。
原因：css中的1px并不能与移动设备上的1px 划分等号，他们之前有一个比例来描述：
window.devicePixelRadio = 设备的物理像素/ css像素

拿iphone/6/7/8 来做例子，他的 window.devicePixelRadio = 2

意味着css 1px 在这些设备上实际上会用 2个物理像素来渲染 所以更粗

解决方法一： 直接写0.5px

jsx模板示范： 
```js
<div id="container" data-device={{window.devicePixelRatio}}></div>
```

用属性选择器：

```js
#container[data-device="2"] {
  border:0.5px solid #333
}
```

二 ：viewport 缩放来解决


<!-- http://www.imooc.com/read/70/article/2131 -->
