var rows = 10;
var cols = 10;
var points = [];
// var sat = 70;
var bright = 60;
var point1;
var point2;
var point3;

function setup() {
  createCanvas(600, 600);
  background(0);
  colorMode(HSB, 100, 100, 100);
  noStroke();
  rectMode(CENTER);
  noLoop();
}

function draw() {
  translate(-width * 0.05, -height * 0.05);
  scale(1.25);
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var tempX = random((width / cols) * c - (width / cols * 0.4), (width / cols) * c + (width / cols * 0.4));
      var tempY = random((height / rows) * r - (height / rows * 0.4), (height / rows) * r + (height / rows * 0.4));
      points.push([tempX, tempY]);
    }
  }
  print(points);
  for (var r = 0; r < rows - 1; r++) {
    for (var c = 0; c < cols - 1; c++) {
      fill(random(0, 100), random(0,70), bright);
      point1 = c + (r * rows);
      point2 = c + (r * rows) + 1;
      point3 = c + (r * rows) + rows;
      triangle(points[point1][0], points[point1][1], points[point2][0], points[point2][1], points[point3][0], points[point3][1]);
      fill(random(0, 80), random(80,100), bright);
      point1 = c + (r * rows) + rows;
      point2 = c + (r * rows) + 1;
      point3 = c + (r * rows) + rows + 1;
      triangle(points[point1][0], points[point1][1], points[point2][0], points[point2][1], points[point3][0], points[point3][1]);
    }
  }
}
