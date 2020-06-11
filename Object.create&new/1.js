
// var Base = function () {
//     this.a = 2
// }
// var o1 = new Base();
// var o2 = Object.create(Base);
// console.log(o1.a);  //2
// console.log(o2.a);  // undefined


Object.mycreate = function(proto) {
  function F() {};
  F.prototype = proto;
  return new F();
}


const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.mycreate(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();




