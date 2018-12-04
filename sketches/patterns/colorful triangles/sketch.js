// Made by Tudor Popescu
var numRow = 20; // number of rows and colomns
var numCol = 20;
var points = [];
var timesDrawed = 6; // make this '0' if you want to remove the lines between the triangles
var sat = (100 / 4) * 3; // saturation and brightness of the colors
var bright = (100 / 4) * 3;
var bnw = false; // make this true if you want the colors to be black and white

function setup() {
  var canvas = createCanvas(2000, 2000);
  canvas.parent("sketch-container");
  background(0, 0, 0);
  // I use HSB to easily create random colors
  colorMode(HSB,100,100,100);
}

function draw() {
  // anti-aliasing technique
  if (timesDrawed >= 3) {
    noLoop();
  } else {
    timesDrawed++;
  }
  noStroke()
  // create a list with all the point coords, used to draw triangles
  for (var r = 0; r < numRow; r++) {
    for (var c = 0; c < numCol; c++) {
      var tempX = (width / (numCol - 1)) * c;
      var tempY = (height / (numRow - 1)) * r;
      points.push([tempX, tempY]);
    }
  }
  // create trinagles based , by 'red' and 'green' triangles I mean how they alternate
  for (var r = 0; r < numRow - 1; r++) {
    for (var c = 0; c < numCol - 1; c++ ) {
      if (r % 2 + 1 == 1) {
        if (c % 2 == 0) {
          // 'Green' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + numRow;
          var point3 = c + (r * numRow) + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          point1 = c + (r * numRow) + numRow;
          point2 = c + (r * numRow) + 1;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        } else {
          // 'Green' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + 1;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + numRow;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        }
      } else {
        if (c % 2 == 0) {
          // 'Green' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + numRow;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + 1;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        } else {
          // 'Green' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          var point1 = c + (r * numRow) + numRow;
          var point2 = c + (r * numRow) + 1;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          if (bnw) {
            fill(random(0,100));
          } else {
          fill(random(0,100),sat,bright);
          }
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + numRow;
          point3 = c + (r * numRow) + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        }
      }
    }
  }
}
