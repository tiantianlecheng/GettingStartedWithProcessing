function setup() {
	createCanvas(480, 120);
  	smooth();
}

var value=255;
var xPos = 0;
var yPos = 0;

function draw() {
	fill(value);
	ellipse(xPos, yPos, 80, 80);
}

function mousePressed(){
	value = 0;
}
function mouseReleased(){
	value = 255;
}
function mouseMoved(){
	xPos = mouseX;
	yPos = mouseY;
}
function mouseDragged(){
	xPos = mouseX;
	yPos = mouseY;
	
}