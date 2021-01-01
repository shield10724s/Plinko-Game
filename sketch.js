const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,790,480,10);

  Engine.run(engine);
}

function draw() {
  background('black');

  ground.display();

  drawSprites();
}