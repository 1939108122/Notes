var arr = [1, , 2, 3];
var list = [1, 2, 3];
var person1 = ['1', 2]; //元组--数组中指定个数和类型
person1.push(1);
console.log(person1);
// 联合类型 union
var union1;
union1 = 3;
union1 = '1';
var union2;
function add(n1, n2) {
    if (typeof n1 == 'string' || typeof n2 == 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
console.log(add(1, 2));
console.log(add('hello', 'world'));
