const express = require('express')
const app = express()
const knex = require('./knex')
var port = process.env.PORT || 3002

app.get('/', function(req, res, next){
     res.send('hello world')
})

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const db = require('knex')(knexConfig);

const sql = knex('notecards').toString();

app.listen(port, function() {
    console.log(`listening on ${port}`)
})