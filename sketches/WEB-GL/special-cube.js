var boxSize = 250;
// var classes = $('#special-cube').attr('class').split(' ');

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("special-cube");
  background(0);
  noSmooth();
}

function draw() {
  background(35, 25, 90);
  translate(0,0,-100);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  stroke(0);
  strokeWeight(3);

  //front
  line(-boxSize, -boxSize, boxSize, boxSize, -boxSize, boxSize);
  line(-boxSize, boxSize, boxSize, boxSize, boxSize, boxSize);
  line(boxSize, -boxSize, boxSize, boxSize, boxSize, boxSize);
  for (var i= 0; i<5;i++) {
    line((-boxSize + (boxSize / 2.5) * i),-boxSize,boxSize,(-boxSize + (boxSize / 2.5) * i),boxSize,boxSize);
  }

  // linking front and back
  for (var i= 0; i<5;i++) {
    line(-boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), -boxSize, boxSize, (-boxSize + (boxSize / 2.5) * i));
  }
  for (var i= 0; i<6;i++) {
    line((-boxSize + (boxSize / 2.5) * i), boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, boxSize);
  }
  for (var i= 0; i<6;i++) {
    line((-boxSize + (boxSize / 2.5) * i), -boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), -boxSize, boxSize);
  }
  for (var i= 0; i<5;i++) {
    line(boxSize, -boxSize, (-boxSize + (boxSize / 2.5) * i), boxSize, boxSize, (-boxSize + (boxSize / 2.5) * i));
  }

  // back
  line(-boxSize, boxSize, -boxSize, boxSize, boxSize, -boxSize);
  line(-boxSize,-boxSize,-boxSize,boxSize,-boxSize,-boxSize);
  line(boxSize, -boxSize, -boxSize, boxSize, boxSize, -boxSize);
  for (var i= 0; i<5;i++) {
    line((-boxSize + (boxSize / 2.5) * i),-boxSize,-boxSize,(-boxSize + (boxSize / 2.5) * i),boxSize,-boxSize);
  }
}
