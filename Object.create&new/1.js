
// var Base = function () {
//     this.a = 2
// }
// var o1 = new Base();
// var o2 = Object.create(Base);
// console.log(o1.a);  //2
// console.log(o2.a);  // undefined




//   分割线 ----------------------
Object.mycreate = function(proto) {
  function F() {};
  F.prototype = proto;
  return new F();
}


const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    console.log(this)
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();




// 分割线-------------------------------
var a = {
  d: '66'
}
var b = Object.create(a,  { p1: {
  value: 123
}})
console.log(b.p1)

