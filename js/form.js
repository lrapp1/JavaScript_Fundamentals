/* 
Name: Laura Rapp
Date: 05/06/2022
Class: CSCI2447, Javascript Fundamentals
Project 6
 */

var firstName; // global variable to store user's name
var userScore = 0; // global variable used to initialize score @0 start of game
var secRemaining = 30; // global variable which tracks the seconds remaining in the game
var clock; // global variable used in timerCountDown to repeat 1sec increment
var xPos;
var yPos;

$(document).ready(function() { //shorthand $(function(){});
    let firstName = prompt ('What is your first name?');
    $('#directions').prepend ('Are you prepared to meet your Maker ' + firstName + '? ').css({'background-color': '#d5e797', 'color': '#30281b', 'padding': '5px', 'border': '3px solid #c4a400'}); //uses jQuery to target container id directions to add text before existing html <p> text w/ name from User input

    $('button').click (letTheGameBegin); // When start button is clicked letGameBegin function is triggered

    $('button').css({'width': '180px', 'height': '100px', 'font': '75px', 'background-color': '#30281b', 'color': '#ffec96'});

    $('#gamespace').on('click', 'img', function(){
        updateScore();
        $(this).toggle('fold');
    }); 

    // jQuery UI Tool Tip Widget that appears hovering over game title and opens link in new tab
    $( function() {
        $( document ).tooltip({
        track: true
        });
        $( document ).tooltip({
            show: {
                effect: "slideDown",
                delay: 250
            }
          });
    });
}); // end doc.ready

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //generic function used to create random whole int range

function gamespaceY () { // references generateRandom and plugs in range 0-260
    return generateRandom (0, 260);
};

function gamespaceX () {
    return generateRandom (0, 570);
};

function deleteIcon() {
    return Math.floor((Math.random() * 400) + 380);
    }

function updateScore () {
    $('#score')[0].innerHTML = userScore; // targets HTML span score and connects to global variable
    userScore+= 1; // global variable referenced and added to in increments of 1
    var soul = document.getElementById('score');
    soul.textContent = userScore + ' Souls';
};

// function that starts game when Start button is clicked
function letTheGameBegin () {
    // $('#score').ready(updateScore); score updated to one when page is loaded
    addGameIcon(); 
    timerCountDown();
    $('button').off('click'); 
};

// function that decrements the user's remaining seconds by 1 and updates html in div
function timerCountDown () {
    $('.thirtysec').show(); //reveals p class: thirtysec upon call of letTheGameBegin
    
    if (secRemaining < 0){
        gameOver();
    } else {
        $('.thirtysec')[0].innerHTML = secRemaining + ' SECONDS LEFT';
        secRemaining-= 1;
        clock = setTimeout ('timerCountDown()',1000); // timeout repeated per 1 sec
        setTimeout ('timerCountDown', 1000); // timerCountDown updated per 1 sec
    }
};

function addGameIcon () {
    if (secRemaining < 0){ // if there are 0 seconds remaining in the timer, call gameOver function
        gameOver();
    } else { // if there are more than 0 seconds remaining
    xPos = gamespaceX(); // Define xPos and yPos variables with prior function integers
    yPos = gamespaceY();
    var newIcon = 0; // variable used to track additions to #maidenDeath icons
    $('#gamespace').append(`<img src='img/deathmaid.png' style= 'top: ${yPos}px; left: ${xPos}px;'>`); // targets #maidenDeath and assigns random game coordinates
    $("img").attr("img", function(newIcon){ return newIcon++;}).fadeOut(deleteIcon()); // targets any html object with img attr, assigns newIcon variable and adds 1, then fades out img using deleteIcon function
    var random = Math.floor(Math.random()*2000);
    let clock = setTimeout(addGameIcon, random); // calls addGameIcon() after 2 sec repeatedly
    };

function restart() { //function which restates user end score and prompts user to replay game. If yes, page reloads
    var endSummary = confirm("The dance is over. You saved " + userScore +" souls. How pathetic. Would you like to challenge me again?");
    if (endSummary == true) {
        location.reload();
    } else {
        alert("When next we meet, the hour will strike for you and your friends.");
    }
};

function gameOver() {
    $("#gamespace").off("click","img"); //#gamespace imgs no longer clickable
    $("#maidenDeath").remove(); // game icons removed from screen
    clearTimeout(timerCountDown); // timer is cleared
    restart(); // restart function called
};
};
