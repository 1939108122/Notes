## Buffer
 由于应用需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，还要操作大量二进制数据，
 JavaScript自有的字符串远远不能满足这些要求，于是Buffer对象应运而生。

 ### 6.1 Buffer结构
 Buffer 是一个像Array的对象， 但它主要用于 **`操作字节`**。
  #### 6.1.1 模块结构
    Buffer是一个典型的JavaScript与c++结合的模块， 它将性能相关的部分用c++实现， 非性能部分用JavaScript实现。

    Buffer所占用的内存不是通过v8分配的，属于堆外内存。
    由于Buffer太过常见，Node在进程启动时就已经加载了它，放在全局对象上，无需使用require()，可直接使用。

  #### 6.1.2 Buffer对象
    Buffer对象类似于数组， 它的元素为16进制的两位数（0~255）

  #### 6.1.3 Buffer内存分配
  Buffer对象的内存分配不是在V8的堆内存中, 而是在Node的C++层面实现内存的申请的。
  Node在内存的使用上应用的是在C++层面申请内存，在JavaScript中分配内存的策略。
  为了高效地使用申请来的内存，Node采用了 **slab分配机制**，slab就是一块申请好的固定大小的内存区域，具有以下三种状态：

  full： 完全分配状态

  paritial: 部分分配状态

  empty： 没有被分配状态

  每个slab单元大小为 8KB，也是以8KB区分Buffer为大对象还是小对象

  ```js
  new Buffer(size) //分配指定大小的BUffer对象
  ```
  Buffer的分配主要使用一个局部变量 `pool` 作为中间处理对象，处于分配状态的slab单元都指向他，以下是分配一个全新的slab单元的操作：
  ```js
  var pool;
  function allocPool() {
    pool = new SlowBuffer(Buffer.poolSize);
    pool.used = 0;
  }
  ```

如果需要超过8KB的Buffer的对象，将会直接分配一个SlowBuffer对象作为slab单元，这个slab单元将会被这个大Buffer对象独占。
  ```js
  this.parent = new SlowBuffer(this.length) //当前Buffer对象的parent属性指向slab
  this.offset = 0; //记录从slab的哪个位置开始
  ```
  #### 小结
  `
  简单而言，真正的内存是在Node的C++层面提供的, JavaScript层面只是使用它，当进行小而频繁的Buffer操作时，采用slab的机制进行预先申请和事后分配，使得JavaScript到操作系统之间不必有过多的内存申请方面的系统调用，对于大块的Buffer而言，则直接使用c++层面提供的内存，而无需细腻的分配操作
  `
 ### 6.2 Buffer的转换
 Buffer对象可以与字符串之间相互转换，支持的字符串编码类型；

 ASCII、 UTF-8、 UTF—16LE/UCS-2、 Base64、 Binary、 HEx

 
  **字符串转换为Buffer对象**通过构造函数：

 ```js
  new Buffer(str, [encoding]) //encoding为编码方式，默认为UTF-8
 ```

  `一个Buffer对象可以存储不同编码类型的字符串值，使用write()实现`
  ```js
  buf.write(string, [offset], [length], [encoding])
  ```
  **Buffer对象转换为字符串**使用toString()
  ```js
  buf.toStirng([enconding], [start], [end])
  ```
  ### 6.4 Buffer与性能
  `Buffer在文件I/O 和网络I/O中运用广泛，尤其在网络运输中，它的性能举足轻重。在应用中，我们通常会操作字符串，但一旦在网络中传输，都需要转换为Buffer，以进行二进制数据传输。在web应用中，字符串转换为Buffer是时时刻刻发生的，提高字符串到Buffer的转换效率，可以很大程度提高网络吞吐率 `

  （P147代码）

  通过预先转换静态内容为BUffer对象，可以有效的减少CPU的重复使用，节省服务器资源。在Node构建的web应用中，可以选择将页面中的动态内容和静态内容分离，静态内容可以预先转换为Buffer的方式提升性能，由于文件本身是二进制数据，所以再不需要改变内容的场景下，尽量只读取Buffer，然后直接传输，不做额外的耗损。

  `
  在文件的读取中，有一个highWaterMark的设置对性能的影响至关重要。每次读取的长度就是用户指定的highWaterMark。
  读取一个相同的大文件时，highWaterMark设置的值的大小与读取速度的关系： 该值越大，读取速度越快。
  `
  
## 总结
    Buffer是一个典型的JavaScript与c++结合的模块， 它将性能相关的部分用c++实现， 非性能部分用JavaScript实现

    真正的内存是在Node的C++层面提供的, JavaScript层面只是使用它

    为了高效地使用申请来的内存，Node采用了 slab分配机制

    字符串转换为Buffer是时时刻刻发生的，提高字符串到Buffer的转换效率，可以很大程度提高网络吞吐率
    
    读取一个相同的大文件时，highWaterMark设置的值的大小与读取速度的关系： 该值越大，读取速度越快。