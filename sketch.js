
const Engine = Matter.Engine; // engine is like the universe
const World = Matter.World; // world is like the earth
const Bodies = Matter.Bodies; // bodies are the objects in the world

var engine1, world1;
var box1, box2;
var ground;

function setup() {

  createCanvas(800,400);

  engine1 = Engine.create(); // engine1 created
  world1 = engine1.world; // world1 created inside engine1 

  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);

  ground = new Ground(200, 390, 400, 20);
  
}

function draw() {

  background(255,255,255);  
  
  Engine.update(engine1);

  box1.display();
  box2.display();
  ground.display();

}