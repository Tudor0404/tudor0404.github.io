var boxSize;

function setup() {
  var canvas = createCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight), WEBGL);
  canvas.parent("sketch-container");
  background(0);
  noSmooth();
  boxSize = Math.min(width, height) / 4;
}

function draw() {
  boxSize = Math.min(width, height) / 4;
  background(0);
  translate(0, 0, -100);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  stroke(255);
  strokeWeight(3);

  //front
  line(-boxSize, -boxSize, boxSize, boxSize, -boxSize, boxSize);
  line(-boxSize, boxSize, boxSize, boxSize, boxSize, boxSize);
  line(boxSize, -boxSize, boxSize, boxSize, boxSize, boxSize);
  for (var i = 0; i < 5; i++) {
    line((-boxSize + (boxSize / 2.5) * i), -boxSize, boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, boxSize);
  }

  // linking front and back
  for (var i = 0; i < 5; i++) {
    line(-boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), -boxSize, boxSize, (-boxSize + (boxSize / 2.5) * i));
  }
  for (var i = 0; i < 6; i++) {
    line((-boxSize + (boxSize / 2.5) * i), boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, boxSize);
  }
  for (var i = 0; i < 6; i++) {
    line((-boxSize + (boxSize / 2.5) * i), -boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), -boxSize, boxSize);
  }
  for (var i = 0; i < 5; i++) {
    line(boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, boxSize, (-boxSize + (boxSize / 2.5) * i));
  }

  // back
  line(-boxSize, boxSize, -boxSize, boxSize, boxSize, -boxSize);
  line(-boxSize, -boxSize, -boxSize, boxSize, -boxSize, -boxSize);
  line(boxSize, -boxSize, -boxSize, boxSize, boxSize, -boxSize);
  for (var i = 0; i < 5; i++) {
    line((-boxSize + (boxSize / 2.5) * i), -boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, -boxSize);
  }
}

function windowResized() {
  resizeCanvas(parseInt(document.getElementById("sketch-container").offsetWidth), parseInt(document.getElementById("sketch-container").offsetHeight));
}
