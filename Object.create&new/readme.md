### Object.create

Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__() ——**MDN**

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```
#### 参数
> Object.create(proto[, propertiesObject])

**proto**
新创建对象的原型对象。
**propertiesObject**
可选。如果没有指定为 undefined，则是要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。



#### 用 Object.create实现类式继承
```js
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

实际上，Object.create内部是这样实现的:
```js
Object.create = function (obj) {
    function F() {}  //空对象
    F.prototype = obj;  //链式继承
    return new F(); //返回新对象
  };
```

##### 自己手写实现一个Object.create()


```js
 var mycreate = function (obj, properties)
 {
    var F = function () {}

    F.prototype = obj
    var a = new F()
    if (properties)
    {
      Object.defineProperties(a, properties);
    }
    return a
 }

 var foo = mycreate({b: 11}, {c: {value: 10}});
  console.dir(foo);
```

**注意: c属性是加在foo对象上，而b属性是在foo原型链上的属性， foo._proto_ === F.prototype 因为继承的时候就是这样继承的** 


### New

**new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例**（晦涩难懂）


当new出来一个对象时，会进行以下操作：
```js
var a = new A();  //拿这个当例子
```
1. 创建空对象；
```js
　　var obj = new Object();
```
1. 设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象；
```js
　obj.__proto__ = A.prototype;
```

3. 使用新对象调用函数，函数中的this被指向新实例对象：
```js
    A.call(obj);  
```


4. 将初始化完毕的新对象地址，保存到等号左边的变量中

**注意：若构造函数中返回this或返回值是基本类型（number、string、boolean、null、undefined）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用类型**

上面这段话可以这样解析：

**返回的时候会进行一个判断，如果构造函数（这里即A）设置了返回值，并且返回值是一个Object类型的话，就直接返回该Object，否则返回新创建的空对象（这里即o）；**

栗子
```js
function A(name){
  this.name = name;
  return {
    age: 12
  }
}
var a = new A('tom');
console.dir(a);   //console.dir()输出对象的所有属性和方法

/*
Object
  age:12
  __proto__:Object
*/
```
