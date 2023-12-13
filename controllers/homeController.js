const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('shaithea_alam', {layout : 'layout'});
});

router.get('/shaithea_alam.ejs', (req, res) => {
    res.render('shaithea_alam', {layout : 'layout'});
});

router.get('/paintings.ejs',(req, res) => {
    res.render('paintings', { layout: 'layout'});
});

router.get('/resume.ejs', (req, res) => {
    res.render('resume', { layout: 'layout'});
});

router.get('/contact.ejs',(req, res) => {
    res.render('contact', { layout: 'layout'});
});

module.exports = router;