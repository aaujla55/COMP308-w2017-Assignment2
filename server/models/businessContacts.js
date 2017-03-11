/* My Portfolio
Author: Amandeep Aujla, JAN 2017
File Name: businessContacts.js
Description: Contain database Configuration
Website Name: https://comp308-w17-assignment2.herokuapp.com/  */

let mongoose = require('mongoose');

// create a model class
let businessContactSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: Number
},
{
  collection: "businesscontacts"
});

module.exports = mongoose.model('businesscontacts', businessContactSchema);