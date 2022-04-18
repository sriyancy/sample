var express = require('express');
var router = express.Router();
const seneca = require('seneca')();
const entities = require('seneca-entity');
const mongo_store = require('seneca-mongo-store');

seneca
  .use("entity")
  .use('mongo-store', {

  url :'mongodb://admin:India%402020@172.30.235.158:27017/sampledb'
 // 172.30.75.153
  })



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test',function(req, res, next) {
    seneca.ready(function () {
        var apple = seneca.make$('fruit')
        apple.name  = 'Pink Lady'
        apple.price = 0.99
        apple.save$(function (err,apple) {
          console.log( "apple.id = "+apple.id  )
        })
      })
  })

module.exports = router;
