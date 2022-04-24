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

    $('button').css({'width': '180px', 'height': '100px', 'font': '55px', 'background-color': '#30281b', 'color': '#ffec96'});

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

function gamespaceY () {
    return generateRandom (0, 350);
};

function gamespaceX () {
    return generateRandom (0, 255);
};

function updateScore () {
    $('#score')[0].innerHTML = userScore; // targets HTML span score and connects to global variable
    userScore+= 1; // global variable referenced and added to in increments of 1
    var soul = document.getElementById('score');
    soul.textContent = userScore + ' Souls';
  /*   if (userScore = 1) { // if userScore = 1 Souls changes to Soul
        var soul = document.getElementById('score');
        soul.textContent = userScore + ' Soul';
        userScore+= 1
    } */
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
        clearTimeout(clock);
        $("#gamespace").html(""); // Remove all the images from the gamespace after timer reaches 0;
    } else {
        $('.thirtysec')[0].innerHTML = secRemaining + ' SECONDS LEFT';
        secRemaining-= 1;
        clock = setTimeout ('timerCountDown()',1000); // timeout repeated per 1 sec
        setTimeout ('timerCountDown', 1000); // timerCountDown updated per 1 sec
    }
};

 /*
Line 71
first targets id maidenDeath inside of html gamespace to apply css img properties
then adds img using html <img src=> with stored javaScript variable: url
*/ 
function addGameIcon () {
    if (secRemaining < 0){
        clearTimeout(clock);
        $("#gamespace").html("");
    } else {
    xPos = gamespaceX();
    yPos = gamespaceY();
    $('#gamespace').append("<img src='img/deathmaid.png' style= 'top:"+xPos+"px; left:"+yPos+"px;'/>");
    var random = Math.floor(Math.random()*2000);
    let clock = setTimeout(addGameIcon, random); // calls addGameIcon() after 2 sec repeatedly
    };
};
