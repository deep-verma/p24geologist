
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var iron,ground, hammer, engine, world;
function preload()
{
	
}

function setup() {
var canavas = 	createCanvas(600, 500);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  iron = new Iron(400,200,20,20);
  ground = new Ground(100,500,1000,20);
  rubber1 = new Rubber(300,300,5,5);
  rubber2 = new Rubber(305,280,5,5);
  rubber3 = new Rubber(310,350,5,5);
  rubber4 =  new Rubber(307,310,5,5);
  hammer = new Hammer(100,100,100,PI);
  stone = new Stone(250,250,30,PI/7);
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //drawSprites();
  iron.display();
  ground.display();
  hammer.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  stone.display();
}



