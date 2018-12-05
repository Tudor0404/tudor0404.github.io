var points = [];
var r;
var lines = 50;
var scaleTotal = 1;
var differential = 1;

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
  scaleRate = 0.01;
  background(0);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount * document.getElementById("rotation-speed-multiplier").value);
  scaleTotal += scaleRate * document.getElementById("scale-speed-multiplier").value * differential;
  scale(scaleTotal);
  for (var i = 0; i < points.length; i++) {
    line(points[i][0], points[i][1], points[(i + 1) % 6][0], points[(i + 1) % 6][1]);
    var tempAngle = 240 + i * 60;
    var tempX = r * 1.1545 * sin(tempAngle) + points[i][0];
    var tempY = r * 1.1545 * cos(tempAngle) + points[i][1];
    for (var j = 0; j < lines + 1; j++) {
      var tempAngle2 = tempAngle = (30 / lines * j) + 210 + i * 60;
      var distance = r / cos(30 / lines * j);
      var tempX2 = distance * sin(tempAngle2) + points[i][0];
      var tempY2 = distance * cos(tempAngle2) + points[i][1];
      line(points[i][0], points[i][1], tempX2, tempY2);
    }
  }
  pop();
  if (scaleTotal >= 1.4 || scaleTotal <= 0.6) {
    differential *= -1;
  }
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
