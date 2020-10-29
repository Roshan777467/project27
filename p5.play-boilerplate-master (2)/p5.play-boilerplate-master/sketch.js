function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}
//level one 
block1 = new blocks(330,235,30,40);
block2 = new blocks(360,235,30,40);
block3 = new blocks(390,235,30,40);
block4 = new blocks(420,235,30,40);
block5 = new blocks(450,235,30,40);
block6 = new blocks(480,235,30,40);
block7 = new blocks(510,235,30,40);
//level two
block8 = new blocks(330,235,30,40);
block9 = new blocks(360,235,30,40);
block10 = new blocks(390,235,30,40);
block11 = new blocks(420,235,30,40);
block12 = new blocks(450,235,30,40);
//level three
block13 = new blocks(360,235,30,40);
block14 = new blocks(390,235,30,40);
block15 = new blocks(420,235,30,40);
//top
block16 = new blocks(420,235,30,40);