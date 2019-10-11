// Page Styling

document.getElementById("heading").innerHTML =
  "Drag and drop the circles to put in ascending size.";
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

var circles = [
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  circle7,
  circle8,
  circle9,
  circle10
];

for (var i = 0; i < circles.length; i++) {
  circles[i].top = Math.floor(Math.random() * 550 + 1) + "px";
  circles[i].left = Math.floor(Math.random() * 550 + 1) + "px";
  circles[i].zIndex = Math.abs(10 - i).toString();
}

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
