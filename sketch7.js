var fran;
var song;
var r = 0;
var x = 0;
var y = 0;
var xs = 0;
var ys = 0;
var lxeye = 0;
var rxeye = 0;
var lyeye = 0;
var ryeye = 0;

function preload() {
  fran = loadImage("fran.png");
  song = loadSound("delerueb.mp3");
}

function setup() {
  createCanvas (800, 800);
  s = 2;
  r = 100;
  zx = random(0, 800);
  zy = random(0, 800);
  song.loop();

  lxeye = x - 10;
  rxeye = x - 10;
  lyeye = y - 600;
  ryeye = y - 600;

}

function draw() {
  x = zx + s;
  y = zy + s;

  ellipse(x, y, r);
}
