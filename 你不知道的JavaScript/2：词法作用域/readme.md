> 词法作⽤域： 在代码书写的时候完成划分，作⽤域链沿着它定义的位置往外延伸
动态作⽤域： 在代码运⾏时完成划分，作⽤域链沿着它的调⽤栈往外延伸
js默认是词法作用域，但是用 Eval欺骗词法作用域



词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段基本能够知道全部标识符在哪里以及是如何声明的，从而能预测在执行过程中如何对他们进行查找。

JavaScript中有两个机制可以'欺骗'词法作用域：eval(..)和with。前者可以对一段包含一个或多个声明的'代码'字符串进行演算，并借此来修改已经存在的词法作用域，（在运行时）。后者本质上是通过将一个对象的引用当做作用域来处理，将对象的属性当做作用域中的标识符来处理，从而创建了一个新的词法作用域，（同样是在运行时）

注意： 这两个机制的副作用时引擎无法在编译时对作用域查找进行优化，因为引擎只能谨慎地认为这样的优化是无效的，**使用这其中一个机制将会导致代码运行变慢。**