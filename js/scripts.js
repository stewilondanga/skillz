var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 07 ){
  message = 'Laugh and the world laughs with you, snore and you sleep alone! Good Morning';
} else if ( now < 08 ) {
  message = 'Everyday may not be good, but there is something good in every day! Good Morning';
} else if ( now < 09 ) {
