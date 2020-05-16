## babel
### babel-core 
babel-core 的作用是把js代码分析成ast， 方便各个插件分析语法进行相应的处理。
### babel-preset-env
现如今不同的浏览器和平台chrome, opera,edge, firefox, safari, ie, ios, android, node, electron不同的模块"amd"，"umd"，"systemjs"，"commonjs"这些es运行环境对es6,es7,es8支持不一，有的支持好，有的支持差，为了充分发挥新版es的特性，我们需要在特定的平台上执行特定的转码规则，说白了就像是按需转码的意思.
### babel-polyfill
babel默认只转换新的 **JavaScript 语法**，比如箭头函数、扩展运算（spread）。

**不转换新的 API**，例如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，则需要为当前环境提供一个垫片（polyfill）。

目前最常用的配合Babel一起使用的polyfill是babel-polyfill，它会”加载整个polyfill库”，针对编译的代码中新的API进行处理，并且在代码中插入一些帮助函数。

### babel-runtime
babel-polyfill解决了Babel不转换新API的问题，但是直接在代码中插入帮助函数，会导致污染了全局环境，并且不同的代码文件中包含重复的代码，导致编译后的代码体积变大。

Babel为了解决这个问题，提供了单独的包babel-runtime用以提供编译模块的工具函数， 启用插件babel-plugin-transform-runtime后，Babel就会使用babel-runtime下的工具函数。
### 比较
babel-polyfill与babel-runtime相比虽然有各种缺点，但在某些情况下仍然不能被babel-runtime替代， 例如，代码：[1, 2, 3].includes(3)，Object.assign({}, {key: 'value'})，Array，Object以及其他”实例”下es6的方法，babel-runtime是无法支持的， 因为babel-runtime只支持到static的方法。

**参考**
https://www.jianshu.com/p/73ba084795ce


### babel-cli
babel-cli 可通过命令行对 ES6 语法的文件进行转码。

参考
https://www.jianshu.com/p/d55125cb69aa

