var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/how', function (req, res) {
    res.render('how');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/what', function (req, res) {
    res.render('what');
});

router.get('/why', function (req, res) {
    res.render('why');
});

module.exports = router;