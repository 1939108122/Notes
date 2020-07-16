var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function(req, res) {
  var json = {
    name: '小红',
    age: 18
  }
  res.send(`callback(${JSON.stringify(json)})`);
  // res.end('const a = 123')
});

app.get('/abc.js', (req, res) => { 
  const fs = require('fs')
  const content = fs.readFileSync('./abc.js', 'utf8')
  res.setHeader('Cache-Control', 'max-age=10')
  res.setHeader('etag', 'abcdefg')   //etag用md5的哈希算法生成  etag和文件内容绑定
  // 文件内容没有变化  etag就不会变  内容变了etag就会变化
  console.log(req.headers['if-none-match'])
  if (req.headers['if-none-match'] && req.headers['if-none-match'] === 'abcdefg')
  {
    console.log(11111)
    res.status(304).end('')
    return ; 
  }
  res.end(content)
})
app.listen(8090, () => {
  console.log('8090')
})