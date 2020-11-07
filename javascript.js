/*  1. Create HTML, CSS, and Logic files. Link all to HTML. !!
    2. Establish starting page design via HTML and CSS. !!
    3. Add current date and time at top of webpage. !! 
    4. Make timeblocks reflective of what time of day it is. One color for past
        one color for present and one color for future. !!
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
    changedTime9.value = 9 //parseInt(moment(changedTime9, ).format("H"));
    // 10:00 block to 10
    var changedTime10 = moment().subtract(7, 'hours');
    changedTime10.value = 10 //parseInt(moment(changedTime10, ).format("H"));
    // 11:00 block to 11
    var changedTime11 = moment().subtract(6, 'hours');
    changedTime11.value = 11 //parseInt(moment(changedTime11, ).format("H"));
    // 12:00 block to 12
    var changedTime12 = moment().subtract(5, 'hours');
    changedTime12.value = 12 //parseInt(moment(changedTime12, ).format("H"));
    // 1:00 block to 1
    var changedTime1 = moment().subtract(4, 'hours');
    changedTime1.value = 13 //parseInt(moment(changedTime1, ).format("H"));
    // 2:00 block to 2
    var changedTime2 = moment().subtract(3, 'hours');
    changedTime2.value = 14 //parseInt(moment(changedTime2, ).format("H"));
    // 3:00 block to 3
    var changedTime3 = moment().subtract(2, 'hours');
    changedTime3.value = 15 //parseInt(moment(changedTime3, ).format("H"));
    // 4:00 block to 4
    var changedTime4 = moment().subtract(1, 'hours');
    changedTime4.value = 16 //parseInt(moment(changedTime4, ).format("H"));
    // 5:00 block to 5
    var changedTime5 = moment().subtract(0, 'hours');
    changedTime5.value =  17 //parseInt(moment(changedTime5, ).format("H"));

    //calling the functions
    setColorToNine();
    setColorToTen();
    setColorToEleven();
    setColorToTwelve();
    setColorToOne();
    setColorToTwo();
    setColorToThree();
    setColorToFour();
    setColorToFive();

    // var nineBlock = $("#nine");
    // nineBlock.value = 9;
    //console.log(nineBlock.value);
    // console.log("Actual time " + actualTime);
    // console.log("Set to " + changedTime1.value);
    // console.log(typeof(changedTime1.value));
    // console.log(typeof(actualTime));
    
    // 
    function setColorToNine() {
        if(changedTime9.value < actualTime){
            $('#input-box1').addClass('past');
            //console.log('past');
        } else if (changedTime9.value === actualTime){
            $('#input-box1').addClass('present');
            //console.log('present');
        } else {
            $('#input-box1').addClass('future');
            //console.log('future');
        }
    }

    function setColorToTen() {
        if(changedTime10.value < actualTime){
            $('#input-box2').addClass('past');
            //console.log('past');
        } else if (changedTime10.value === actualTime){
            $('#input-box2').addClass('present');
            //console.log('present');
        } else {
            $('#input-box2').addClass('future');
            //console.log('future');
        }
    }

    function setColorToEleven() {
        if(changedTime11.value < actualTime){
            $('#input-box3').addClass('past');
            //console.log('past');
        } else if (changedTime11.value === actualTime){
            $('#input-box3').addClass('present');
            //console.log('present');
        } else {
            $('#input-box3').addClass('future');
            //console.log('future');
        }
    }

    function setColorToTwelve() {
        if(changedTime12.value < actualTime){
            $('#input-box4').addClass('past');
            //console.log('past');
        } else if (changedTime12.value === actualTime){
            $('#input-box4').addClass('present');
            //console.log('present');
        } else {
            $('#input-box4').addClass('future');
            //console.log('future');
        }
    }

    function setColorToOne() {
        if(changedTime1.value < actualTime){
            $('#input-box5').addClass('past');
            //console.log('past');
        } else if (changedTime1.value === actualTime){
            $('#input-box5').addClass('present');
            //console.log('present');
        } else {
            $('#input-box5').addClass('future');
            //console.log('future');
        }
    }

    function setColorToTwo() {
        if(changedTime2.value < actualTime){
            $('#input-box6').addClass('past');
            //console.log('past');
        } else if (changedTime2.value === actualTime){
            $('#input-box6').addClass('present');
            //console.log('present');
        } else {
            $('#input-box6').addClass('future');
            //console.log('future');
        }
    }

    function setColorToThree() {
        if(changedTime3.value < actualTime){
            $('#input-box7').addClass('past');
            //console.log('past');
        } else if (changedTime3.value === actualTime){
            $('#input-box7').addClass('present');
            //console.log('present');
        } else {
            $('#input-box7').addClass('future');
            //console.log('future');
        }
    }

    function setColorToFour() {
        if(changedTime4.value < actualTime){
            $('#input-box8').addClass('past');
            //console.log('past');
        } else if (changedTime4.value === actualTime){
            $('#input-box8').addClass('present');
            //console.log('present');
        } else {
            $('#input-box8').addClass('future');
            //console.log('future');
        }
    }

    function setColorToFive() {
        if(changedTime5.value < actualTime){
            $('#input-box9').addClass('past');
            //console.log('past');
        } else if (changedTime5.value === actualTime){
            $('#input-box9').addClass('present');
            //console.log('present');
        } else {
            $('#input-box9').addClass('future');
            //console.log('future');
        }
    }
   
    var input1 = document.querySelector('#input-box1');

    $('.btn1').click(function(event){
        event.preventDefault();

        var userInput = {
            box1: input1.value.trim()
        }
        
        console.log(userInput.box1);

        localStorage.setItem("userInput", JSON.stringify(userInput.box1));

        
     })
     
     var prevInput = JSON.parse(localStorage.getItem("userInput"));
     
     window.onload = function(){myFunction()};
     
     function myFunction() {
     input1.textContent = prevInput;
     var target = document.querySelector('#input-box1');
     target.value += prevInput;
        
     }

    // event listener for saveBtn
    // $('.saveBtn').click(function(event){
    //     event.preventDefault();

    // })

    //event listener for clear button
    // $('.clearBtn').click(function(event){
    //     event.preventDefault();
    //     $('#input-box1').empty();
    //     $('#input-box2').empty();
    //     $('#input-box3').empty();
    //     $('#input-box4').empty();
    //     $('#input-box5').empty();
    //     $('#input-box6').empty();
    //     $('#input-box7').empty();
    //     $('#input-box8').empty();
    //     $('#input-box9').empty();
    // })


   
});
