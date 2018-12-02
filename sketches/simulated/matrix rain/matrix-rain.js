var font,
  fontsize = 30,
  widthFontsize = 30 * 0.55,
  maxSpeed = 2,
  minSpeed = 15,
  maxLength = 30,
  minLength = 6,
  density = 1.8,
  framerate = 60,
  randomCharChance = 0.1;
var charCodes = ['48', '49', '50', '51', '52', '53', '57', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '43', '44', '45', '46', '47', '61', '37', '34', '39', '35', '38', '95', '40', '41', '44', '46', '59', '58', '63', '33', '92', '124', '123', '125', '60', '62', '91', '93', '94', '126'];
var rainCols = [];
var tempCharRainCols = [];
var tempBrightRainCols = [];


function preload() {
  font = loadFont('sketches/simulated/matrix rain/assets/matrix-code-nfi.otf');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("matrix-rain");
  textFont(font);
  textSize(fontsize);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(framerate);
  var cols = Math.ceil(width / widthFontsize);
  for (var i = 0; i < cols; i++) {
    rainCols.push(new matrixCol(i * widthFontsize, i));
  }
  density = density * width;
}

function draw() {
  background(0);
  for (var i = 0; i < rainCols.length; i++) {
    rainCols[i].checker();
    rainCols[i].creater();
    rainCols[i].render();
  }
  tempCharRainCols = [];
  for (var i = 0; i < rainCols.length; i++) {
    var tempList = [];
    for (var j = 0; j < rainCols[i]['chars'].length; j++) {
      tempList.push(rainCols[i]['chars'][j]['value']);
    }
    tempCharRainCols.push(tempList);
  }

  tempBrightRainCols = [];
  for (var i = 0; i < rainCols.length; i++) {
    var tempList = [];
    for (var j = 0; j < rainCols[i]['chars'].length; j++) {
      tempList.push(rainCols[i]['chars'][j]['bgBrightness']);
    }
    tempBrightRainCols.push(tempList);
  }
}

function matrixOne(x, y, speed, value, position, col) {
  this.x = x;
  this.y = y;
  this.position = position;
  this.speed = speed;
  this.value = value;
  this.col = col;
  this.bgBrightness = random(10, 2);
  this.fontBrightness = random(60, 30);
  this.fontSaturation = 60;

  this.render = function() {
    if (this.y < height + 40 && this.y > 0) {
      fill(114, 95, this.bgBrightness);
      rect(this.x, this.y - fontsize, widthFontsize, fontsize);
      fill(112, this.fontSaturation, this.fontBrightness);
      text(this.value, this.x, this.y - 5);
    }
  }

  this.update = function() {
    if (frameCount % speed == 0) {
      if (this.position[0] == 0) {
        this.fontBrightness = 100;
        this.fontSaturation = 10;
      } else if (this.position[0] == 1) {
        this.fontBrightness = random(60, 30) + 30;
      } else if (this.position[0] == 2) {
        this.fontBrightness = random(60, 30) + 10;
      } else if (this.position[0] == this.position[1] - 1) {
        this.fontBrightness = 1;
        this.bgBrightness = 1;
      } else if (this.position[0] == this.position[1] - 2) {
        this.fontBrightness = random(60, 30) - 10;
      } else if (this.position[0] == this.position[1] - 3) {
        this.fontBrightness = random(60, 30) - 20;
      } else {
        this.fontBrightness = random(60, 30);
      }

      if (tempCharRainCols[this.col][this.position[0] - 1] != undefined && random() > randomCharChance) {
        this.value = tempCharRainCols[this.col][this.position[0] - 1];
      } else {
        this.value = String.fromCharCode(charCodes[Math.floor(Math.random() * charCodes.length)]);
      }

      this.y += fontsize;
      if (tempBrightRainCols[this.col][this.position[0] - 1] != undefined) {
        this.bgBrightness = tempBrightRainCols[this.col][this.position[0] - 1];
      } else {
        this.bgBrightness = random(10, 2);
      }
    }
  }
}

function matrixCol(x, col) {
  this.x = x;
  this.speed = round(random(minSpeed, maxSpeed));
  this.chars = [];
  this.lengthMatrix = round(random(minLength, maxLength));
  this.col = col;
  this.startOff = round(random(20, 100)) * fontsize;

  this.creater = function() {
    if (this.chars.length == 0) {
      for (var i = 0; i < this.lengthMatrix; i++) {
        this.chars.push(new matrixOne(this.x, -i * fontsize - this.startOff, this.speed, String.fromCharCode(charCodes[Math.floor(Math.random() * charCodes.length)]), [i, this.lengthMatrix], this.col));
      }
    }
  }

  this.render = function() {
    for (var i = 0; i < this.chars.length; i++) {
      this.chars[i].update();
      this.chars[i].render();
    }
  }

  this.checker = function() {
    if (this.chars.length != 0) {
      if (this.chars[this.lengthMatrix - 1].y >= density) {
        this.chars = [];
        this.speed = round(random(minSpeed, maxSpeed));
        this.lengthMatrix = round(random(minLength, maxLength));
      }
    }
  }
}
