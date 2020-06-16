var name = 'foo'  //全局作用域

// 函数作用域
function showName () {
  console.log(name)
}

// 块作用域
if (true)
{
  name = 'Bigbear'
}

showName();  //输出Bigbear



// 词法作用域
var name = 'foo';
 function showName() {
 console.log(name);
 }
 function changeName() {
 var name = 'BigBear';
 showName();
 }
 changeName(); //foo
// 这一段代码采用了词法作用域（静态作用域），在showName（）函数内部查找是否有局部变量name，没有则向上层作用域（全局作用域查找）
// 到name为foo，则打印出foo

function showName(str) {
 // var name = "BigBear
  eval(str)
  console.log(name)
  }
  
  var name = 'xiuyan'
  var str = 'var name = "BigBear"'
  
  showName(str) // 输出 BigBear
  // 按理说没有 eval showName先查找 函数内部局部变量，没有再查找上级作用域也就是全局作用域的name输出 xiuyan

