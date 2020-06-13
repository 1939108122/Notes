#### 原型链继承
```js
function father() {
    this.faName = 'father';
}
father.prototype.getfaName = function() {
    console.log(this.faName);
};
function child() {
    this.chName = 'child';
}
child.prototype = new father();
child.prototype.constructor = child;
child.prototype.getchName = function() {
    console.log(this.chName);
};
```