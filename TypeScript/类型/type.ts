let arr: number[] = [1, ,2, 3];
let list: Array<number> = [1, 2, 3];

let person1: [string, number] = ['1', 2];  //元组--数组中指定个数和类型

person1.push(1);
console.log(person1);

// 联合类型 union
let union1 : string | number
union1 = 3;
union1 = '1';
let union2 : string | number | boolean | number[] | string[]

function add (n1: number | string, n2: number | string) {
    if (typeof n1 == 'string' || typeof n2 == 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}

console.log(add(1, 2));
console.log(add( 'hello', 'world'));