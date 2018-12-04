var points = [];

function setup() {
  var canvas = createCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  // add the points
  var r = height * 1.2 * 0.2;
  points.push([width / 2, height / 2]);
  for (var j = 1; j < 3; j++) {
    for (var i = 0; i < 6; i++) {
      var tempX = (r * j) * sin(i * 60) + (width / 2);
      var tempY = (r * j) * cos(i * 60) + (height / 2);
      points.push([tempX, tempY]);
    }
  }
  background(0);
  colorMode(HSB,100,100,100);
}

function draw() {
  background(0);
  // add the points

  stroke((100/300)* (frameCount % 300),50,100);
  for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points.length; j++) {
      line(points[i][0], points[i][1], points[j][0], points[j][1]);
    }
  }
}


function windowResized() {
  resizeCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
  angleMode(DEGREES);
  points = [];
  var r = height * 1.2 * 0.2;
  points.push([width / 2, height / 2]);
  for (var j = 1; j < 3; j++) {
    for (var i = 0; i < 6; i++) {
      var tempX = (r * j) * sin(i * 60) + (width / 2);
      var tempY = (r * j) * cos(i * 60) + (height / 2);
      points.push([tempX, tempY]);
    }
  }
}
