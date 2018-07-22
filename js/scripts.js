var today = new Date();
var now = today.getHours();
var greeting = document.getElementById("greeting");
var message;

if ( now < 07 ){
  message = 'Laugh and the world laughs with you, snore and you sleep alone! Good Morning';
} else if ( now < 08 ) {
  message = 'Everyday may not be good, but there is something good in every day! Good Morning';
} else if ( now < 09 ) {
	message = 'If at first you do not succeed, find out if the loser gets anything. Good Morning';
} else if ( now < 10 ) {
  message = 'There are lots of people who mistake their imagination for their memory. Good Morning';
} else if ( now < 11 ) {
  message = 'If I want to knock a story off the front page, I just change my hairstyle. Good Morning';
