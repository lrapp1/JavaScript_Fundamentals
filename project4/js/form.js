var firstName; // global variable to store user's name
var url = 'img/deathmaid.png'; // global variable that stores game icon path
var userScore = 0; // global variable used to initialize score @0 start of game
var secRemaining = 30; // global variable which tracks the seconds remaining in the game
var t; // global variable used in timerCountDown to repeat 1sec increment

$(document).ready(function() { //shorthand $(function(){});
    let firstName = prompt ('What is your first name?');
    $('#directions').prepend ('Are you prepared to meet your Maker ' + firstName + '? '); //uses jQuery to target container id directions to add text before existing html <p> text w/ name from User input

    $('button').click (letTheGameBegin); // When start button is clicked letGameBegin function is triggered

    $('button').css({'width': '180px', 'height': '100px', 'font-size': '45px', 'background-color': '#30281b', 'color': '#ffec96'});

    $('#gamespace').on('click', 'img', (updateScore)); 
}); // end doc.ready

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //generic function used to create random whole int range

function gamespaceY () {
    return generateRandom (0, 400);
};

function gamespaceX () {
    return generateRandom (0, 667);
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
    //alert (gamespaceY());
    //alert (gamespaceX());
    // $('#score').ready(updateScore); score updated to one when page is loaded
    addGameIcon(); 
    timerCountDown();
    /*
   Lines 43/44
   alerts printing random numbers from gamespaceX & Y
   */
};

// function that decrements the user's remaining seconds by 1 and updates html in div
function timerCountDown () {
    $('.thirtysec').show(); //reveals p class: thirtysec upon call of letTheGameBegin
    $('.thirtysec')[0].innerHTML = secRemaining + ' SECONDS LEFT';
    setTimeout ('timerCountDown', 1000); // timerCountDown updated per 1 sec
    t = setTimeout ('timerCountDown()',1000); // timeout repeated per 1 sec
    secRemaining-= 1;
    if (secRemaining < 0) {
        clearTimeout (t);
    }
};

 /*
Line 71
first targets id maidenDeath inside of html gamespace to apply css img properties
then adds img using html <img src=> with stored javaScript variable: url
*/ 
function addGameIcon () {
    $('#maidenDeath').addClass('maidenDeath').append(`<img src='${url}'>`);
    
    let interval = setTimeout(addGameIcon, 2000); // calls addGameIcon() after 2 sec repeatedly
    if(secRemaining <= 0){
        clearInterval(interval);
        $("#gamespace").html(""); // Remove all the images from the gamespace after timer reaches 0;
    }
};
