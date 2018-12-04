var points = [];
var r;
var lines = 50;

function setup() {
  var canvas = createCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  // get the points of the corners of the hexagon
  r = Math.min(width, height) * 0.4;
  var angle = 60;
  for (var i = 1; i < 7; i++) {
    var tempX = r * sin((angle * i + 30) % 360);
    var tempY = r * cos((angle * i + 30) % 360);
    points.push([tempX, tempY]);
  }
  background(0);
  stroke(255);
  rectMode(CENTER);
}

function draw() {
  background(0);
  // draw the lines of ...
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 1);
  // scale(frameCount / 90);   add scale in future
  for (var i = 0; i < points.length; i++) {
    // ... the hexagon perimeter
    line(points[i][0], points[i][1], points[(i + 1) % 6][0], points[(i + 1) % 6][1]);
    var tempAngle = 240 + i * 60;
    var tempX = r * 1.1545 * sin(tempAngle) + points[i][0];
    var tempY = r * 1.1545 * cos(tempAngle) + points[i][1];
    for (var j = 0; j < lines + 1; j++) {
      // ... the lines inside the hexagon
      var tempAngle2 = tempAngle = (30 / lines * j) + 210 + i * 60;
      var distance = r / cos(30 / lines * j);
      var tempX2 = distance * sin(tempAngle2) + points[i][0];
      var tempY2 = distance * cos(tempAngle2) + points[i][1];
      line(points[i][0], points[i][1], tempX2, tempY2);
    }
  }
  pop();
}

function windowResized() {
  resizeCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
  points = [];
  r = Math.min(width, height) * 0.4;
  var angle = 60;
  for (var i = 1; i < 7; i++) {
    var tempX = r * sin((angle * i + 30) % 360);
    var tempY = r * cos((angle * i + 30) % 360);
    points.push([tempX, tempY]);
  }
}
