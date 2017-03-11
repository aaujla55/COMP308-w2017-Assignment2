/* My Portfolio
Author: Amandeep Aujla, JAN 2017
File Name: index.js
Description: Contain routes for navigation
Website Name: https://expressportfolio-aaujla.herokuapp.com/ */

// modules required for routing
var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User; // alias for User Model - User object

// define the game model
let businessContact = require('../models/businessContacts');

// create a function to check if the user is authenticated
function requireAuth(req, res, next) {
  // check if the user is logged in
  if(!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Home',
    businessContacts : '',
    displayName: req.user ? req.user.displayName : ''
  });
});

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res, next)
{
 res.render('content/aboutMe',{
   title: 'About Me',
   businessContacts : '',
   displayName: req.user ? req.user.displayName : ''
  });
});

/* GET contactMe page */
router.get('/contactMe',function(req, res, next)
{
res.render('content/contactMe',{
  title: 'Contact Me',
  businessContacts : '',
  displayName: req.user ? req.user.displayName : ''});
});

/* GET projects page */
router.get('/projects', function(req, res, next)
{
res.render('content/projects', {
  title: 'Projects',
  businessContacts : '',
  displayName: req.user ? req.user.displayName : ''
});
});

/*GET services page */
router.get('/services', function(req, res, next)
{
res.render('content/services', {
  title : 'Services',
  businessContacts : '',
  displayName: req.user ? req.user.displayName : ''
});

});

// GET /login - render the login view
router.get('/login', (req, res, next)=>{
  // check to see if the user is not already logged in
  if(!req.user) {
    // render the login page
    res.render('auth/login', {
      title: "Login",
      businessContacts: '',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/businessContacts'); // redirect to businessContacts list
  }
});

// POST /login - process the login attempt
router.post('/login', passport.authenticate('local', {
  successRedirect: '/businessContacts',
  failureRedirect: '/login',
  failureFlash: 'bad login'
}));

// GET /register - render the registration view
router.get('/register', (req, res, next)=>{
   // check to see if the user is not already logged in
  if(!req.user) {
    // render the registration page
      res.render('auth/register', {
      title: "Register",
      businessContacts: '',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : ''
    });
    return;
  } else {
    return res.redirect('/businessContacts'); // redirect to businessContacts list
  }
});

// POST / register - process the registration submission
router.post('/register', (req, res, next)=>{
  User.register(
    new User({
      username: req.body.username,
      //password: req.body.password,
      email: req.body.email,
      displayName: req.body.displayName
    }),
    req.body.password,
    (err) => {
      if(err) {
        console.log('Error inserting new user');
        if(err.name == "UserExistsError") {
          req.flash('registerMessage', 'Registration Error: User Already Exists');
        }
        return res.render('auth/register', {
          title: "Register",
          businessContacts: '',
          messages: req.flash('registerMessage'),
          displayName: req.user ? req.user.displayName : ''
        });
      }
      // if registration is successful
      return passport.authenticate('local')(req, res, ()=>{
        res.redirect('/businessContacts');
      });
    });
});

// GET /logout - process the logout request
router.get('/logout', (req, res, next)=>{
  req.logout();
  res.redirect('/'); // redirect to the home page
});

module.exports = router;
