const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bob1;
var Bob2;
var Bob3;
var Bob4;
var Bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bob1 = new Bob(400,350,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Bob1.display();
  
  drawSprites();
 
}



