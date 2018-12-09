var numPoints;
var points;
var noiseT;
var noiseOffset = 50;
var scaling = 1.2;
var filled = false; // make shapes instead of lines

function setup() {
  var canvas = createCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
  canvas.parent("sketch-container");
  // creating points and settings for the random movement
  points = [];
  noiseT = [];
  numPoints = document.getElementById("num-of-dots").value;
  var moveSpeed = document.getElementById("speed-of-dots").value
  for (var i = 0; i < numPoints; i++) {
    var tempNoiseX = random(-noiseOffset, noiseOffset);
    var tempNoiseY = random(-noiseOffset, noiseOffset);
    var tempNoiseXplus = random(-moveSpeed, moveSpeed);
    var tempNoiseYplus = random(-moveSpeed, moveSpeed);
    noiseT.push([tempNoiseX, tempNoiseY, tempNoiseXplus, tempNoiseYplus]);
    var tempX = width * noise(noiseT[i][0]);
    var tempY = height * noise(noiseT[i][1]);
    points.push([tempX, tempY]);
  }
  stroke(0, 0, 255);
  background(0);
  noSmooth();
  fill(0, 0, 255);
}

function draw() {
  print('displaying');
  background(0);
  var connections = document.getElementById("connections").value;
  if (connections-1 >= numPoints) {
    connections = numPoints - 1;
  }
  // moving the points
  for (var i = 0; i < numPoints; i++) {
    points[i][0] = width * noise(noiseT[i][0]) * scaling;
    points[i][1] = height * noise(noiseT[i][1]) * scaling;
  }

  // calculate the distance between all the points
  for (var i = 0; i < points.length; i++) {
    var distance = {};
    for (var j = 0; j < numPoints; j++) {
      var startX = points[i][0];
      var startY = points[i][1];
      var endX = points[j][0];
      var endY = points[j][1];
      var tempDistance = dist(startX, startY, endX, endY);
      distance[tempDistance] = [endX, endY];
    }

    var tempKeys = Object.values(Object.keys(distance)).sort(function(a, b) {
      return a - b
    });
    // drawing lines
    if (filled) {
      strokeWeight(0);
      beginShape()
      vertex(points[i][0], points[i][1]);
      for (var c = 1; c < connections; c++) {
        vertex(distance[tempKeys[c]][0], distance[tempKeys[c]][1]);
      }
      endShape()
    } else {
      strokeWeight(1);
      for (var c = 1; c < connections; c++) {
        line(points[i][0], points[i][1], distance[tempKeys[c]][0], distance[tempKeys[c]][1]);
      }
    }
  }

  // adding noise
  for (var i = 0; i < noiseT.length; i++) {
    noiseT[i][0] += noiseT[i][2];
    noiseT[i][1] += noiseT[i][3];
  }
  // cehcking the borders
  for (var i = 0; i < points.length; i++) {
    if (points[i][0] >= width) {
      points[i][0] = width;
    } else if (points[i][0] <= 0) {
      points[i][0] = 0;
    }
    if (points[i][1] >= height) {
      points[i][1] = height;
    } else if (points[i][1] <= 0) {
      points[i][1] = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
}

function toggleFillFunc() {
  filled = !filled;
  document.getElementById("activable-button").classList.toggle("hoverable");
}

function resetFunc() {
  setup();
}
