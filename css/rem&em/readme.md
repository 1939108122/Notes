## rem
相对于html根元素的font-size 定义的字体大小

eg: 
```js
html {
  font-size: 100px;
}
```
那么 `1rem = 100px  `
```js
div {
  width: 2rem;
  height: 1rem;
}

```
相当于
```js
  div {
    width: 200px;
    height: 100px;
  }
```

## em

相对当前元素使用的字体大小
```js
div {
  font-size: 20px;
  margin: 20rem;
}
```
那么这里的margin就是 400px