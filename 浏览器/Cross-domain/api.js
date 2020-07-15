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
app.listen(8090, () => {
  console.log('8090')
})