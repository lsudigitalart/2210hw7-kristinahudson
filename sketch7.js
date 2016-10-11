var song;
var x = 600
var y = 400
var x2 = 637
var y2 = 80
var w = 5
var h = 5
var w2 = 0
var h2 = 0
var x3 = 637
var y3 = 235
var w3 = 0
var h3 = 0





function preload() {
  song = loadSound("felix.mp3");
}

function setup() {
  createCanvas (2000, 800);
  song.loop();
  angleMode(DEGREES);

}

function draw() {
  background(255);
  var ct = millis();
  if (( ct > 1000) && (ct < 2999)) {
    w *= 1.06;
    h *= 1.06;
  }
  if (( ct > 3000) && (ct < 3699)) {
  w *= 99/100;
  h *= 99/100;
}
if (( ct > 3700) && (ct < 3999)) {
  w *= 1.03;
  h *= 1.03;
}
if((ct > 4000) && (ct < 4499)) {
  w *= 99/100;
  h *= 99/100;
}
if ((ct > 4500) && (ct < 5599)) {
  x -= 4;
}
if ((ct > 5600) && (ct < 6199)) {
  w *= .98;
  h *= .98;
}
if ((ct > 6200) && (ct < 7199)) {
  x+=5;
  y-=5;
  w*=.99;
  h*=.99;
}
if ((ct > 7200) && (ct < 8299)) {
  y2 += 2;
  w2 = 30;
  h2 = 30;
}
if ((ct > 8300) && (ct < 8599)) {
  y3 += 1.5;
  w3 = 20;
  h3 = 20;
}
if ((ct > 8600) && (ct < 9999)) {
  x -= 2.5;
  y += 2.5;
  y2 += 1.5;
  x3 += 1;
  y3 += 1;
}
if ((ct > 10000) && (ct < 17999)) {
  x += 2;
  x2 += 2;
  x3 += 2;
  }

  noStroke();
  fill(100, 200, 250);
  ellipse(x, y, w, h);
  ellipse(x2, y2, w2, h2);
  ellipse(x3, y3, w3, h3);


}
