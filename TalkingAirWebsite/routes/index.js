var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'Who We Are' });
});

router.get('/how', function (req, res) {
    res.render('how', { title: 'How' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

router.get('/what', function (req, res) {
    res.render('what', { title: 'What' });
});

router.get('/why', function (req, res) {
    res.render('why', { title: 'Why' });
});

module.exports = router;