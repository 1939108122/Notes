## BFC： 就是一个作用范围， 可以理解为一个独立的容器，不给外界造成影响

BFC可解决的问题：
1. 解决元素浮动带来的副作用
2. 阻止边距重叠
3. 阻止元素被浮动的元素覆盖


创建BFC的方法

1. 元素的定位不是static或者relative
2. overflow属性不是 visible
3. float的值不是none
4. display的值是 inline-block、 table-cell、flex...