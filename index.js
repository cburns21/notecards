const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.get('/', function(req, res, next){
     res.send('hello world')
})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})