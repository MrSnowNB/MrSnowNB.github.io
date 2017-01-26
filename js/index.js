$(function() {

  var backgroundImg = [
    'http://cdn.wallpapersafari.com/93/91/K41BiL.jpg',
    'http://www.pixelstalk.net/wp-content/uploads/2015/12/kansai-new.jpg'
  ]; //Add more backgrounds to the array

  $('body').css('background-image', 'url(' + backgroundImg[1] + ')'); //allows a variable for changing background img based in an array, change number in [] to change background...

});