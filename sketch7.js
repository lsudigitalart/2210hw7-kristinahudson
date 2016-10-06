var fran;
var song;
var x1;
var y1;
var x2;
var y2;
var lxeye = 0;
var rxeye = 0;
var lyeye = 0;
var ryeye = 0;
var time1 = 1000;
var time2 = 2800;
var time3 = 4800;
var time4 = 6300;
var time5 = 8200;
var time6 = 10000;
var time7 = 13500;
var time8 = 14100;
var time9 = 14700;

function preload() {
  fran = loadImage("franback.png");
  song = loadSound("delerueb.mp3");
}

function setup() {
  createCanvas (2000, 800);
  song.loop();
  x2 = 200;
  y2 = 500;

}

function draw() {
  var currentTime = millis();
  if (currentTime > time9) {
    x1 = 20;
    y1 = 30;
    x2 = 200;
    y2 = 500;
  } else if (currentTime > time8) {
    x1 = 50;
    y1 = 70;
  } else if (currentTime > time7) {
    x1 = 300;
    y1 = 400;
  } else if (currentTime > time6) {
    x1 = 600;
    y1 = 70;
  } else if (currentTime > time5) {
    x1 = 200;
    y1 = 500;
  } else if (currentTime > time4) {
    x1 = 20;
    y1 = 300;
  } else if (currentTime > time3) {
    x1 = 30;
    y1 = 100;
  } else if (currentTime > time2) {
    x1 = 70;
    y1 = 500;
  } else if (currentTime > time1) {
    x1 = 50;
    y1 = 400;
  }

image(fran, x2, y2, 300, 250);
noStroke();
fill(random(0, 255), random(0, 255), random(0, 255), 90);
ellipse(x1, y1, random(10, 100));
}
