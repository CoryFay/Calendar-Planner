/*  1. Create HTML, CSS, and Logic files. Link all to HTML. !!
    2. Establish starting page design via HTML and CSS. !!
    3. Add current date and time at top of webpage. !! 
    4. Make timeblocks reflective of what time of day it is. One color for past
        one color for present and one color for future.
    5. Allow time blocks to hold and save user input.
    6. Make sure user input remains apart of the page even on refresh. */

$( document ).ready(function() {
    //establishing date and time at top of html page
    var newP = $('<p>');
    newP.text(moment().format('llll'));
    $('#currentDay').append(newP);

    //Establishing variables for timeblocks and setting their values! -- thru line___
    var time = moment();
    var actualTime = parseInt(moment(time, ).format("H"));
    //BELOW! -- sets the '9:00' block to value of 9. 
    var changedTime9 = moment().subtract(8, 'hours');
    changedTime9.value = parseInt(moment(changedTime9, ).format("H"));

    // var nineBlock = $("#nine");
    // nineBlock.value = 9;
    //console.log(nineBlock.value);
    console.log("Actual time " + actualTime);
    console.log("Set to " + changedTime9.value);
    console.log(typeof(changedTime9.value));
    console.log(typeof(actualTime));
    
    
    function setColorToTime() {
        if(changedTime9.value < actualTime){
            $('#input-box1').addClass('past');
            console.log('past');
        } else if (changedTime9.value === actualTime){
            $('#input-box1').addClass('present');
            console.log('present');
        } else {
            $('#input-box1').addClass('future');
            console.log('future');
        }
    }

setColorToTime();

   
});
