var canvas = document.getElementById("theCanvas");
var button = document.getElementById("clear");
var sizeUp = document.getElementById("sizeUp");
var sizeDown = document.getElementById("sizeDown");
var redButton = document.getElementById("red");
var blueButton = document.getElementById("blue");
var greenButton = document.getElementById("green");
var orangeButton = document.getElementById("orange");
var yellowButton = document.getElementById("yellow");
var limeButton = document.getElementById("lime");
var purpleButton = document.getElementById("purple");
var pinkButton = document.getElementById("pink");
var aquaButton = document.getElementById("aqua");
var brownButton = document.getElementById("brown");
var whiteButton = document.getElementById("white");
var greyButton = document.getElementById("grey");
var blackButton = document.getElementById("black");

blueButton.onclick = function() {
  context.strokeStyle = "blue";
}

purpleButton.onclick = function() {
  context.strokeStyle = "purple";
}
pinkButton.onclick = function() {
  context.strokeStyle = "pink";
}

aquaButton.onclick = function() {
  context.strokeStyle = "aqua";
}

brownButton.onclick = function() {
  context.strokeStyle = "brown";
}
whiteButton.onclick = function() {
  context.strokeStyle = "white";
}
greyButton.onclick = function() {
  context.strokeStyle = "grey";
}
blackButton.onclick = function() {
  context.strokeStyle = "black";
}


purpleButton.onclick = function() {
  context.strokeStyle = "purple";
}

limeButton.onclick = function() {
  context.strokeStyle = "lime";
}

yellowButton.onclick = function() {
  context.strokeStyle = "yellow";
}

orangeButton.onclick = function() {
  context.strokeStyle = "orange";
}

redButton.onclick = function() {
  context.strokeStyle = "red";
}

greenButton.onclick = function() {
  context.strokeStyle = "green";
}

sizeUp.onClick = function(){
  context.lineWidth++;
}

sizeDown.onClick = function(){
  if (context.lineWidth > 1)
    context.lineWidth--;
}

var context = canvas.getContext("2d");

var drawing = false;

context.strokeStyle = "red";
context.lineCap = "round";
context.lineWidth = 50;


canvas.width = 750;
canvas.height = 500;



canvas.onmousedown = function(e) {
  drawing = true;
  context.beginPath()
  context.moveTo(e.pageX - this.offsetLeft,
                  e.pageY - this.offsetTop);
}

canvas.onmousemove = function(e) {
  if (drawing) {
    context.lineTo(e.pageX - this.offsetLeft,
                  e.pageY - this.offsetTop);
    context.stroke();
  }
}

canvas.onmouseup = function() {
  drawing = false;
  context.closePath();
}

button.onclick = function(){
  context.clearRect(0,0,canvas.width, canvas.height);
}