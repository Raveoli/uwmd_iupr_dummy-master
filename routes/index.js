var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*router.get('/db', function(req, res) {

    // connect to carto
    var client = new carto.SQL({
        user:"raveena.hegde@gmail.com",
        api_key:'7eb21b3c9b23e0a313c6d4f7f1d433e920f3059b'
    });
    client.execute("SELECT * FROM table_2015_2016_centroids_total").done(function(data){
        console.log(data);
    });
});*/


module.exports = router;
