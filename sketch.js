let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
function setup() {
  
  createCanvas(600, 600);
   background(100, 200, 150);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 300;
  posicaoVertical = 300;
}

function draw() {
  fill(cor);
 circle(posicaoHorizontal, posicaoVertical, 60);
  if(mouseX < posicaoHorizontal) {posicaoHorizontal = posicaoHorizontal -1;}
  if(mouseX > posicaoHorizontal) {posicaoHorizontal = posicaoHorizontal +1;}
  if(mouseY < posicaoVertical) {posicaoVertical --;}
  if(mouseY > posicaoVertical) {posicaoVertical ++;}
  if(mouseIsPressed){ cor = color(random(0, 255), random(0, 255), random(0, 255));}
}
