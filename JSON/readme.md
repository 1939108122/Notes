## JSON
（参考来自）
https://blog.csdn.net/weixin_41819731/article/details/81414968

**JSON(Javascript Object Notation) 是一种轻量级的数据交换格式。它基于ECMAScript(w3c制定的一个js规范)的一个子集，采用完全独立于编程语言的文本格式来存储和表示数据。简洁和清晰地层次结构使得JSON成为理想的数据交换语言，易于人阅读和编写，同时还利于机器解析和生成，并有效的提升网络传输效率。** --百度百科
#### JSON诞生
JSON出现之前，是一直使用XML来传递数据，XML是一种纯文本格式，适合在网络上交换数据，但是加上DTD，XSD等一大堆复杂的规范之后就非常麻烦，所以就有了JSON这种超轻量的数据格式。
JSON是一个提供了**stringfy**和**parse**方法的内置对象：

**stringify将js对象转化为符合json标准的字符串**

**parse将符合json标准的字符串转化为js对象**

`需要注意的是，空数组和空对象都是合格的JSON值，null本身也是一个合格的JSON值。`

注意：
**在json字符串转换成对象，还有eval_r('('+json字符串+')')这个方法，但是会出现一些意外的错误。
原因：eval_r获取的json对象的值中，如果有执行代码，也将照样执行！所以若不能保证数据的安全性，不要使用eval_r方法进行转义。**
