function setup() {
		var canvas = createCanvas(480, 120);
	canvas.parent("canvas");
}

function draw() {
	noStroke();
	background(0, 26, 51);         // Dark blue color
	fill( 255, 0, 0);              // Red Color
	ellipse(132, 82, 200, 200);    // Red circle
	fill(0, 255, 0);               // Green color
	ellipse(228, -16, 200, 200);   // Green circle
	fill(0, 0, 255);               // Blue color
	ellipse(268, 118, 200, 200);   // Blue circle

	}