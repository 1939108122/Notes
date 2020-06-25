// console.log(a)
// var a= 2  // undefined


// console.log(a)
// const a = 2  //refenrence error

// var a = 1

// const a = 2
// console.log(a)  //不可重复声明

// for (var i =0; i< 3; i++)
// {
//    let i = 'abc'
//   console.log(i)
// }


function bar() {
  if(true) {
      let temp = 5;
      console.log(temp);
  }
  
  console.log(temp);
}

bar(); // 5 和 "ReferenceError: temp is not defined