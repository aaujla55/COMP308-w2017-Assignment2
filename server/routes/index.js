/* My Portfolio
Author: Amandeep Aujla, JAN 2017
File Name: index.js
Description: Contain routes for navigation
Website Name: https://expressportfolio-aaujla.herokuapp.com/ */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res, next)
{
 res.render('aboutMe',{title: 'About Me'});
});

/* GET contactMe page */
router.get('/contactMe',function(req, res, next)
{
res.render('contactMe',{title: 'Contact Me'});
});

/* GET projects page */
router.get('/projects', function(req, res, next)
{
res.render('projects', {title: 'Projects'});
});

/*GET services page */
router.get('/services', function(req, res, next)
{
res.render('services', {title : 'Services'});
});

module.exports = router;
