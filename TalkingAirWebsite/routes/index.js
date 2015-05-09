var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { pageName: 'Home' });
});

router.get('/about', function (req, res) {
    res.render('about', { pageName: 'About' });
});

router.get('/how', function (req, res) {
    res.render('how', { pageName: 'How' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { pageName: 'Contact' });
});

router.get('/what', function (req, res) {
    res.render('what', { pageName: 'What' });
});

router.get('/why', function (req, res) {
    res.render('why', { pageName: 'Why' });
});

module.exports = router;