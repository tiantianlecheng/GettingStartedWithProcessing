function setup() {
  var canvas = createCanvas(480, 120);
  canvas.parent("canvas");
  strokeWeight(12);
}

function draw() {
	background(200,200);
	stroke(255);
	line(120, 60, mouseX, mouseY);
	stroke(0);
	var mx = map(mouseX, 0, width, 60, 180);
	line(120, 60, mx, mouseY);
}
