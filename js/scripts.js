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
} else if ( now < 12 ) {
  message = 'I have a new philosophy. I am only going to dread one day at a time. Good Morning';
} else if ( now < 13 ) {
  message = 'A committee is a group that keeps minutes and loses hours. Good Afternoon!';
} else if ( now < 14 ) {
	message = 'My one regret in life is that I am not someone else. Good Afternoon';
} else if ( now < 15 ) {
  message = 'Everybody talks about the weather, but nobody does anything about it. Good Afternoon';
} else if ( now < 16 ) {
  message = 'If I were two-faced, would I be wearing this one? Good Afternoon!';
