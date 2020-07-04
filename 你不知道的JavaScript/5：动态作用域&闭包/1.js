// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 1000);
// }
// // 1s后输出 55555

// // 改进成1s后 输出01234

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function(j){
//     setTimeout(function() {
//       console.log(j);
//   }, 1000)
//   })(i)
 
// }

for (var i = 0; i < 5; i++) {
  (function(){
    var j = i
    setTimeout(function() {
      console.log(j);
  }, 1000)
  })()
 
}



