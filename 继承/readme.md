#### 原型链继承1
```js
// 偶像练习生比赛
 function Idol() {
   this.hobbies = ['sing', 'dance', 'rap'] //每位练习生必须会这三样才能参赛
 }

 Idol.prototype.sayHobbies = function() {
    console.log(this.hobbies)
  }

 function Person() {

 }

 Person.prototype = new Idol()   //原型链继承
 Person.prototype.constructor = Person
 let idol1 = new Person()
 let idol2 = new Person()
 console.log(idol1.sayHobbies())  //["sing", "dance", "rap"]
 console.log(idol2.sayHobbies())  //["sing", "dance", "rap"]

 idol1.hobbies.push('basketball') 
 console.log(idol1.sayHobbies())  // ["sing", "dance", "rap", "basketball"]
 console.log(idol2.sayHobbies())  // ["sing", "dance", "rap", "basketball"]
```
## 可以看到，原型链继承的缺点就是子类创建的实例属性可以共享，不是私有的，原因是他们的属性都来自父类，而且不能子类传参给父类

#### 原型链继承2（感觉不错，不过可以屏蔽）
```js
function A() {
  this.a = 'hello';
}

function B() {
  A.call(this);
  this.b = 'world';
}

// B.prototype = Object.create(A.prototype, {
//   constructor: { value: B, writable: true, configurable: true }
// });这段代码等同于下面这段
B.prototype = Object.create(A.prototype)
B.prototype.constructor = B

let b = new B();
console.log(b.a) // hello
```


#### 借用构造函数继承（经典继承）

```js
 function Idol(name) {
   this.name = name
   this.hobbies = ['sing', 'dance', 'rap']
 }

 Idol.prototype.sayHobbies = function() {
    console.log(this.hobbies)
  }

 function Person(name) {
   Idol.call(this, name)
 }

  let idol1 = new Person('truekunkun')
  let idol2 = new Person('fakekunkun')
  console.log(idol1.hobbies)  //["sing", "dance", "rap"]
  console.log(idol2.hobbies)  //["sing", "dance", "rap"]

  idol1.hobbies.push('basketball')
   console.log(idol1.hobbies)  //["sing", "dance", "rap", "basketball"]
   console.log(idol2.hobbies)  //["sing", "dance", "rap"]
```
## 可以很清楚的看到构造函数继承解决了原型链继承的缺点，每个实例的属性是私有独立的，各自不受影响，而且可以传参给父类，
## 但是缺点就是不能继承父类原型对象上的方法和属性，这里如果console.log(idol1.sayHobbies()) 会报错。


#### 组合继承

```js
 function Idol (name) {
    this.name = name
    this.hobbies = ['sing', 'dance', 'rap']
  }

  Idol.prototype.sayName = function() {
    console.log(this.name)
  }

  function Person (name, age) {
    Idol.call(this, name)
    this.age = age
  }

  Person.prototype = new Idol()
  Person.prototype.constructor = Person
  let idol1 = new Person('truekun', '20')
  let idol2 = new Person('fakekun', '22')
  idol1.hobbies.push('basketball')

  console.log(idol1) 
//   Person {name: "truekun", hobbies: Array(4), age: "20"}
// age: "20"
// hobbies: (4) ["sing", "dance", "rap", "basketball"]
// name: "truekun"

console.log(idol2)
// Person {name: "fakekun", hobbies: Array(3), age: "22"}
// age: "22"
// hobbies: (3) ["sing", "dance", "rap"]
// name: "fakekun"

console.log(idol1.sayName()) //truekun
console.log(idol2.sayName()) //fakekun
```
## 组合继承结合了构造函数继承和原型链继承的优点，同时又避免了他们的缺点，是目前最常用的继承方式。


#### Es6继承

**最简单的Es6继承**
```js
class Father {
  constructor(father) {
    this.father = father
  }
}

class Son extends Father{
  constructor(father,age, name) {
    super(father)  
    this.age = age
    this.name = name
  }
  
}

let child = new Son('father',20, '小白')
console.log(child)


//原型链
Son.__proto__ === Father //true
Son.prototype.__proto__ === Father.prototype //true
Father.__proto__ === Function.prototype // true
Function.prototype.__proto__ === Object.prototype //true
```



## Es5和Es6的继承区别？

Es5是先创建子类的实例this，在把父类的this指向子类的this Func.call(this)
Es6是先创建父类的实例对象this(用super)  再用子类的构造函数修改this