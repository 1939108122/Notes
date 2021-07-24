var btn = document.getElementById('btn');
var id1 = document.getElementById('num1') as HTMLInputElement;
var id2 = document.getElementById('num2') as HTMLInputElement;



function add (num1:number, num2:number)
{
    return num1 + num2;
}

btn.addEventListener( 'click', function () {
    console.log(add( +id1.value, +id2.value));
})
