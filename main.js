// Page Styling

document.getElementById("heading").innerHTML = "Drag and drop the circles to put in ascending size.";
document.getElementById("heading").style.textAlign = "center";
var body = document.getElementById("body").style;
body.color = "#fff";
body.backgroundColor = "#222";
body.fontFamily = "Arial";

/* Variable for each circles of style object. */

var circle1 = document.getElementById("circle1").style;
var circle2 = document.getElementById("circle2").style;
var circle3 = document.getElementById("circle3").style;
var circle4 = document.getElementById("circle4").style;
var circle5 = document.getElementById("circle5").style;
var circle6 = document.getElementById("circle6").style;
var circle7 = document.getElementById("circle7").style;
var circle8 = document.getElementById("circle8").style;
var circle9 = document.getElementById("circle9").style;
var circle10 = document.getElementById("circle10").style;

/* Random value for top */

circle1.top = Math.floor(Math.random() * 550 + 1) + "px";
circle2.top = Math.floor(Math.random() * 550 + 1) + "px";
circle3.top = Math.floor(Math.random() * 550 + 1) + "px";
circle4.top = Math.floor(Math.random() * 550 + 1) + "px";
circle5.top = Math.floor(Math.random() * 550 + 1) + "px";
circle6.top = Math.floor(Math.random() * 550 + 1) + "px";
circle7.top = Math.floor(Math.random() * 550 + 1) + "px";
circle8.top = Math.floor(Math.random() * 550 + 1) + "px";
circle9.top = Math.floor(Math.random() * 550 + 1) + "px";
circle10.top = Math.floor((Math.random() * 550) + 1) + "px";

/* Random value for left */

circle1.left = Math.floor(Math.random() * 550 + 1) + "px";
circle2.left = Math.floor(Math.random() * 550 + 1) + "px";
circle3.left = Math.floor(Math.random() * 550 + 1) + "px";
circle4.left = Math.floor(Math.random() * 550 + 1) + "px";
circle5.left = Math.floor(Math.random() * 550 + 1) + "px";
circle6.left = Math.floor(Math.random() * 550 + 1) + "px";
circle7.left = Math.floor(Math.random() * 550 + 1) + "px";
circle8.left = Math.floor(Math.random() * 550 + 1) + "px";
circle9.left = Math.floor(Math.random() * 550 + 1) + "px";
circle10.left = Math.floor(Math.random() * 550 + 1) + "px";

// Z Index 
document.getElementById("circle1").style.zIndex = "10";
document.getElementById("circle2").style.zIndex = "9";
document.getElementById("circle3").style.zIndex = "8";
document.getElementById("circle4").style.zIndex = "7";
document.getElementById("circle5").style.zIndex = "6";
document.getElementById("circle6").style.zIndex = "5";
document.getElementById("circle7").style.zIndex = "4";
document.getElementById("circle8").style.zIndex = "3";
document.getElementById("circle9").style.zIndex = "2";
document.getElementById("circle10").style.zIndex = "1";

// Function for Drag and Drop
function mover(event) {
    theElement = event.currentTarget;
    console.log(theElement.style.left);
    posX = parseInt(theElement.style.left);
    posY = parseInt(theElement.style.top);

    diffX = event.clientX - posX;
    diffY = event.clientY - posY;

    document.addEventListener("mousemove", elementMover);
    document.addEventListener("mouseup", elementDropper);

}

function elementMover(event) {
    theElement.style.left = event.clientX - diffX + "px";
    theElement.style.top = event.clientY - diffY + "px";
}

function elementDropper(event) {
    document.removeEventListener("mousemove", elementMover);
    document.removeEventListener("mouseup", elementDropper);
}