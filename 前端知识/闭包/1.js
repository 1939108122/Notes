function test() {
    var a = 1;
    return function() {
        a++;
        console.log(a);
    }
};
var inner1 = test();
var inner2 = test();
inner1();
inner2();
inner1();