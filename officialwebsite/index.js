var express = require('express')
var app = express();
const server = require('http').Server(app)

app.use(express.static(__dirname))
server.listen(5500,function () {
    console.log('启动成功')
})