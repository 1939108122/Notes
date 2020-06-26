## 视觉视口(visual viewport)
设备能看到的实际区域

## 布局视口(layout viewport)
相当于一块画布，能进行布局的区域

## 一般来说，视觉视口要和 布局视口一样大才能让 手机设备看到所有的区域，
所以就有 `<meta name="viewport" content="width=device-width">`

可以通过 `window.innerWidth` 和 `window.innerHeight` 来获取视觉视口的宽度和高度
`document.documentElement.clientWidth` 和 `document.documentElement.clientHeight`获取 布局视口的宽度

