let angleRight = -45;
let angleLeft = -45;
let angleWave;
let bamYes = false;
let mic;
let micLevel;
let changeDirection;
// let xPos = 100;
let hat1;
let ball1;
let ball2;
let ball3;
let ball4;
let xLeft = 150;
let xRight = 250;
let y = 180;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);

  hat1 = new Hat(width * 0.35, height * -0.15, 20, 1);
  ball1 = new Ball(50, 20, 1);
  ball2 = new Ball(400, 160, .75);
  ball3 = new Ball(180, 70, .50);
  ball4 = new Ball(400, 70, .90);
  // mic = new p5.AudioIn()
  // mic.start();

  changeDirection = false;
}

function draw() {

  background(102, 163, 229);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  
  drawMidleft();
  drawMidright();
  drawLeft(angleRight);
  drawRight(angleRight)
  drawHead();
  drawLefteye();
  drawRighteye();
  drawPupils();
  drawMouth();
  // drawHat(width * .5, height * -.2, 32);  
  
  
  hat1.display();
  ball1.move();
  ball2.move();
  ball3.move();
  ball4.move();
  
  // console.log("mic level" + mic.getLevel());

  // micLevel = mic.getLevel()
  // angleWave = map(mic.getLevel(), 0, .03, 10, 0);

  // if (xPos > width * .5) {
  //   changeDirection = true
  // } else if (xPos <= 1) {
  //   changeDirection = false
  // }
  // if (xPos >= 0 && changeDirection == false) {
  //   xPos = xPos + 2
  // } else if (changeDirection == true) {
  //   xPos = xPos - 2
  // }

}

function mousePressed() {

  //if the position of this mouse is inside this region, then do this

  if (mouseX > width * 0.5 && mouseX < width * 0.8 && mouseY > height * 0.1 && mouseY < height * 0.3) {
    console.log("mouse beep in here");
    angleRight = -angleRight;
    angleLeft = -angleLeft;

  } else if (mouseX < width * 0.25 || mouseX > width * 0.8) {
    bamYes = !bamYes;
    console.log("mouse beep in here");
  }
}

function drawLeft(rotation) {
  //tentacle left
  beginShape();
  c = color(255, 204, 0);
  fill(c);
  c = color(65);
  stroke(50);
  strokeWeight(8);
  //tentacle shape
  push();
  translate(width * .35, height * .54);
  rotate(rotation);
  vertex(0, 0);
  vertex(width * .32 - width * .32, height * .54 - height * .54);
  vertex(width * .32 - width * .32, height * .54 - height * .54);
  curveVertex(width * .15 - width * .32, height * .65 - height * .54);
  vertex(width * .15 - width * .32, height * .70 - height * .54);
  vertex(width * .22 - width * .32, height * .68 - height * .54);
  vertex(width * .35 - width * .32, height * .58 - height * .54);
  vertex(width * .32 - width * .32, height * .55 - height * .54);
  vertex(width * .32 - width * .32, height * .56 - height * .54);
  endShape();
  pop();
}

function drawMidleft() {
  //tentacle middle left
  beginShape();
  c = color(255, 204, 0);
  fill(c);
  c = color(65);
  stroke(50);
  strokeWeight(8);
  vertex(width * .48, height * .61);
  vertex(width * .42, height * .61);
  curveVertex(width * .22, height * .77);
  vertex(width * .22, height * .85);
  vertex(width * .30, height * .82);
  vertex(width * .50, height * .63);
  vertex(width * .42, height * .61);
  vertex(width * .42, height * .61);
  endShape();
}

function drawMidright() {
  //tentacle middle right

  beginShape();
  c = color(255, 204, 0);
  fill(c);
  c = color(65);
  stroke(50);
  strokeWeight(8);
  vertex(width * .61, height * .61);
  vertex(width * .55, height * .61);
  curveVertex(width * .75, height * .85);
  vertex(width * .80, height * .78);
  vertex(width * .63, height * .58);
  vertex(width * .63, height * .58);
  vertex(width * .56, height * .61);
  vertex(width * .65, height * .61);
  endShape();
}

function drawRight(rotation) {
  //tentacle right
  c = color(255, 204, 0);
  fill(c);
  c = color(65);
  stroke(50);
  strokeWeight(8);

  push();
  translate(width * .65, height * .54)
  rotate(rotation);
  vertex(0, 0);
  beginShape();
  vertex(width * .65 - width * .65, height * .54 - height * .54);
  vertex(width * .66 - width * .65, height * .55 - height * .54);
  curveVertex(width * .90 - width * .65, height * .67 - height * .54);
  vertex(width * .90 - width * .65, height * .60 - height * .54);
  vertex(width * .65 - width * .65, height * .5 - height * .54);
  vertex(width * .65 - width * .65, height * .54 - height * .54);
  endShape();
  pop();
}

function drawHead() {
  // head
  c = color(255, 204, 0);
  fill(c);
  stroke(50);
  strokeWeight(8);
  ellipse(200, 150, 200, 200);
  c = color(65);
}

function drawLefteye() {

  // left eye
  fill(255);
  stroke(50);
  strokeWeight(5);
  circle(150, 180, 30);
}

function drawRighteye() {
  // right eye
  fill(255);
  stroke(50);
  strokeWeight(5);
  circle(250, 180, 30);
}

function drawPupils() {
  fill(50);
  strokeWeight(5);
  ellipse(xLeft, y, 12);
  ellipse(xRight, y, 12);
  y = map(mouseY, 0, height, 180, 190, true);
  xLeft = map(mouseX, 0, width, 145, 160, true);
  xRight = map(mouseX, 0, width, 245, 260, true);
}

function drawMouth() {
  // mouth
  c = color(255, 171, 158);
  fill(c);
  circle(200, 210, 20);
}