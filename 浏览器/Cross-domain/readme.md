## 跨域
浏览器的同源策略：只有当两个URL协议、域名、端口完全相同时，就叫做同源，就可以进行读写资源(请求数据，localStorage、cookies读取)。
只要协议、域名、端口有一个不同，就可以叫做跨域。

解决方案：jSONP、CORS、PostMessage

## JSONP
虽然说由于同源策略的影响，不能请求不同域的数据，但是可以通过script标签加载不同域下的静态资源文件比如 js(php,jsp)文件，客户端通过回调函数来将数据传入。

```js
// a.html
<script type="text/javascript">
    function dosomething(data){
        //处理获得的数据
    }
</script>
<script src="http://example.com/data.php?callback=dosomething"></script>
```

```js
// 后端
<?php
$callback = $_GET['callback'];//得到回调函数名
$data = array('a','b','c');//要返回的数据
echo $callback.'('.json_encode($data).')';//输出
?>
```

JSONP优缺点
优点： 兼容低版本的IE
缺点： 只支持GET请求。

## CORS

CORS(跨域资源共享)通信其实和同源的AJAX请求没有差别，CORS需要浏览器和服务器同时支持，浏览器除了IE10，其他的都支持，只是在进行跨域请求的时候，浏览器会针对请求自动在请求头部加上一些信息，服务器通过这些信息来识别是否允许请求资源。

浏览器会将CORS请求分为简单请求和非简单请求来对其进行不一样的处理发送给服务器。

简单请求：同时满足以下两点：
1. 请求方式为 GET、POST、HEAD
2. HTTP的请求头部信息不超过以下几个字段：
    Accept、 Accept-Language、Content-Language、LastLast-Event-ID、
    Content-Type：只限于三个值applicationx-www-form-urlencoded、multipart/form-data、text/plain
    
简单请求浏览器会在请求头部信息加一个origin，表明本次请求来自那个源，服务器会对此响应，有个字段Access-Control-Allow-Origin假设为*或者该源，则允许请求，没有这个字段则不允许。

非简单请求：不满足上面两个条件都是非简单请求。
浏览器发现这是一个非简单请求，就会自动发送一个“预检”请求（请求方法是OPTION表明是查询）给服务器，查看是不是允许这个源请求资源，以及可以使用哪些HTTP动词和头信息字段，预检请求头除了origin还会有Access-Control-Request-Method，Access-Control-Request-Headers。如果允许的话，浏览器才会发出真正的请求给服务器，服务器接收到会响应，响应头部里面会有Access-Control-Allow-Origin表明是否允许请求源请求资源。

## http://www.ruanyifeng.com/blog/2016/04/cors.html


## cors

Accecpt-control-allow-origin
Accept-control-allow-method
Accept-control-allow-headers
Accept-control-allow-credential  //允不允许携带cooikes
Accept-control-allow-max-age     //预检请求可以缓存的时间



## 强缓存和协商缓存

强缓存在响应头设置 Cache-control 为 max-age=xx秒 ，前端第一次请求状态码为200，在max-age时间内再次请求就会从本地缓存取出来，
本地缓存有的 分为memory-cache 和 disk-cache 一个是内存， 一个是硬盘

协商缓存  看一下前一次后端是否返回 etag， 返回了就取下etag值，以一个 if-none-match传给后端