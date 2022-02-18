// let p = new Promise(() => {});
// setTimeout(console.log, 0, p);

// let p1 = new Promise((resolve, reject) => {
//     reject();
// })

// setTimeout(console, 0, p1);



async function foo() {
    console.log(1);
    return 3;
}
foo().then(console.log);

console.log(2);