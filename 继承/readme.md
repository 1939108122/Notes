#### 原型链继承1
```js
function father() {
    this.faName = 'father';
}
father.prototype.getfaName = function() {
    console.log(this.faName);
};
function child() {
    // this.chName = 'child';
    father.call(this)
}
child.prototype = new father();
child.prototype.constructor = child;
child.prototype.getchName = function() {
    console.log(this.chName);
};
```
#### 原型链继承2（感觉不错）
```js
function A() {
  this.a = 'hello';
}

function B() {
  A.call(this);
  this.b = 'world';
}

B.prototype = Object.create(A.prototype, {
  constructor: { value: B, writable: true, configurable: true }
});

let b = new B();

```
#### 借用构造函数继承（经典继承）
```js
function Parent() {
    this.names = ['arzh','arzh1']
}

function Child() {
    Parent.call(this)
}

var arzhChild2 = new Child()
arzhChild2.names.push('arzh2')
console.log(arzhChild2.names) //[ 'arzh', 'arzh1', 'arzh2' ]

var arzhChild3 = new Child()
arzhChild3.names.push('arzh3')
console.log(arzhChild3.names) //[ 'arzh', 'arzh1', 'arzh3' ]
```

#### 组合继承

```js
//先来个父类，带些属性
function Super(){
    this.flag = true;
}
//为了提高复用性，方法绑定在父类原型属性上
Super.prototype.getFlag = function(){
    return this.flag;
}
//来个子类
function Sub(){
    this.subFlag = false;
}
//实现继承
Sub.prototype = new Super;
//给子类添加子类特有的方法，注意顺序要在继承之后
Sub.prototype.getSubFlag = function(){
    return this.subFlag;
}
//构造实例
var es5 = new Sub;
```

#### Es6继承

**最简单的Es6继承**
```js
class Super {

      constructor(name){



        this.name = 'name';



    }

      sayName(){

      console.log(this.name);

      }

      }



class Sub extends Super{

constructor(name){

super(name);

     this.name = 'xindi';

}

}
var a = new Sub()
console.log(a.name)  //xindi
```



2: 参考： https://www.jianshu.com/p/3d09c6fe330e
```js
// es6继承
  class Animal {
    //构造函数，里面写上对象的属性
    constructor(props) {
      this.name = props.name || 'Unknown';
    }
    //方法写在后面
    eat() {//父类共有的方法
      console.log(this.name + " will eat pests.");
    }
  }

  //class继承
  class Bird extends Animal {
    //构造函数
    constructor(props,myAttribute) {//props是继承过来的属性，myAttribute是自己的属性
      //调用实现父类的构造函数
      super(props)//相当于获得父类的this指向
      this.type = props.type || "Unknown";//父类的属性，也可写在父类中
      this.attr = myAttribute;//自己的私有属性
    }

    fly() {//自己私有的方法
      console.log(this.name + " are friendly to people.");
    }
    myattr() {//自己私有的方法
      console.log(this.type+'---'+this.attr);
    }
  }

//通过new实例化
  var myBird = new Bird({
    name: '小燕子',
    type: 'Egg animal'//卵生动物
  },'Bird class')
  myBird.eat()
  myBird.fly()
  myBird.myattr()
```