$( document ).ready(function() {
    //establishing date and time at top of html page
var newP = $('<p>');
newP.text(moment().format('llll'));

$('#currentDay').append(newP);

});