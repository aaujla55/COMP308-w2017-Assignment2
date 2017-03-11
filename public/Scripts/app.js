/*AUTHOR: Amandeep Aujla*/
/*Basic JAVASCRIPT/JQUERY goes here*/
/*Website Name: https://comp308-w17-assignment2.herokuapp.com// */

 $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 250) { // check if user scrolled more than 50 from top of the browser window
          $(".topnav").css("background-color", "#000"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
          $(".topnav").css("opacity", "0.6");
        } else {
          $(".topnav").css("background-color", "transparent"); // if not, change it back to transparent
          $(".topnav").css("opacity", "1");
        }
      });
    });


    function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    }
 
 // IIFE
(function(){
  $(".btn-danger").click(function(event){
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/games");
    }
  });
})();