ECMAScript中的数据类型可分为两种：

基本类型：undefined,null,Boolean,String,Number,Symbol
引用类型：Object,Array,Date,Function,RegExp等

不同类型的存储方式：

基本类型：基本类型值在内存中占据固定大小，保存在栈内存中
引用类型：引用类型的值是对象，保存在堆内存中，而栈内存存储的是对象的变量标识符以及对象在堆内存中的存储地址

typeof null === 'object'  //true