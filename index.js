const express = require('express')
const app = express()
const knex = require('./knex')
const port = process.env.PORT || 3002

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const db = require('knex')(knexConfig);

const sql = knex('notecards').toString();



app.get('/', function(req, res, next){
     db('notecards')
     .then((rows) => {
         res.send(rows);
     })
     .catch((err) => {
         next(err)
     })
})

knex('notecards')
  .select('id', 'name')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, function() {
    console.log(`listening on ${port}`)
})