var btn = document.getElementById('btn');
var id1 = document.getElementById('num1');
var id2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () {
    console.log(add(+id1.value, +id2.value));
});
