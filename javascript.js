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
    
    // functions set to add classes to time blocks
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
    //establishing global variables
    var input1 = document.querySelector('#input-box1');
    var input2 = document.querySelector('#input-box2');
    var input3 = document.querySelector('#input-box3');
    var input4 = document.querySelector('#input-box4');
    var input5 = document.querySelector('#input-box5');
    var input6 = document.querySelector('#input-box6');
    var input7 = document.querySelector('#input-box7');
    var input8 = document.querySelector('#input-box8');
    var input9 = document.querySelector('#input-box9');

    //'onload' call the following functions to render the existing data
     window.onload = function()
    {   myFunction1(),
        myFunction2(),
        myFunction3(),
        myFunction4(),
        myFunction5(),
        myFunction6(),
        myFunction7(),
        myFunction8(),
        myFunction9()
    };

    //add event listener to 'btn1'
    $('.btn1').click(function(event){
        event.preventDefault();
        //making an object to contain the 'text' of input1
        var userInput1 = {
            box1: input1.value.trim()
        }
        //saving this info to local storage
        localStorage.setItem("userInput1", JSON.stringify(userInput1.box1));
    })
     //making a variable that gets the info of input1
     var prevInput1 = JSON.parse(localStorage.getItem("userInput1"));
     //function will display the stored data in 'input-box1'
     function myFunction1() {
     var target1 = document.querySelector('#input-box1');
     target1.value += prevInput1;
        
     }

     $('.btn2').click(function(event){
        event.preventDefault();
        var userInput2 = {
            box1: input2.value.trim()
        }
        localStorage.setItem("userInput2", JSON.stringify(userInput2.box1));
    })
     
     var prevInput2 = JSON.parse(localStorage.getItem("userInput2"));

     function myFunction2() {
     var target2 = document.querySelector('#input-box2');
     target2.value += prevInput2;
        
     }

     $('.btn3').click(function(event){
        event.preventDefault();
        var userInput3 = {
            box1: input3.value.trim()
        }
        localStorage.setItem("userInput3", JSON.stringify(userInput3.box1));
    })
     
     var prevInput3 = JSON.parse(localStorage.getItem("userInput3"));

     function myFunction3() {
     var target3 = document.querySelector('#input-box3');
     target3.value += prevInput3;
        
     }

     $('.btn4').click(function(event){
        event.preventDefault();
        var userInput4 = {
            box1: input4.value.trim()
        }
        localStorage.setItem("userInput4", JSON.stringify(userInput4.box1));
    })
     
     var prevInput4 = JSON.parse(localStorage.getItem("userInput4"));

     function myFunction4() {
     var target4 = document.querySelector('#input-box4');
     target4.value += prevInput4;
        
     }

     $('.btn5').click(function(event){
        event.preventDefault();
        var userInput5 = {
            box1: input5.value.trim()
        }
        localStorage.setItem("userInput5", JSON.stringify(userInput5.box1));
    })
     
     var prevInput5 = JSON.parse(localStorage.getItem("userInput5"));

     function myFunction5() {
     var target5 = document.querySelector('#input-box5');
     target5.value += prevInput5;
        
     }

     $('.btn6').click(function(event){
        event.preventDefault();
        var userInput6 = {
            box1: input6.value.trim()
        }
        localStorage.setItem("userInput6", JSON.stringify(userInput6.box1));
    })
     
     var prevInput6 = JSON.parse(localStorage.getItem("userInput6"));

     function myFunction6() {
     var target6 = document.querySelector('#input-box6');
     target6.value += prevInput6;
        
     }

     $('.btn7').click(function(event){
        event.preventDefault();
        var userInput7 = {
            box1: input7.value.trim()
        }
        localStorage.setItem("userInput7", JSON.stringify(userInput7.box1));
    })
     
     var prevInput7 = JSON.parse(localStorage.getItem("userInput7"));

     function myFunction7() {
     var target7 = document.querySelector('#input-box7');
     target7.value += prevInput7;
        
     }

     $('.btn8').click(function(event){
        event.preventDefault();
        var userInput8 = {
            box1: input8.value.trim()
        }
        localStorage.setItem("userInput8", JSON.stringify(userInput8.box1));
    })
     
     var prevInput8 = JSON.parse(localStorage.getItem("userInput8"));

     function myFunction8() {
     var target8 = document.querySelector('#input-box8');
     target8.value += prevInput8;
        
     }

     $('.btn9').click(function(event){
        event.preventDefault();
        var userInput9 = {
            box1: input9.value.trim()
        }
        localStorage.setItem("userInput9", JSON.stringify(userInput9.box1));
    })
     
     var prevInput9 = JSON.parse(localStorage.getItem("userInput9"));

     function myFunction9() {
     var target9 = document.querySelector('#input-box9');
     target9.value += prevInput9;
        
     }

   
   
});
