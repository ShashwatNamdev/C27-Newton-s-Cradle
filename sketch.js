const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 600);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(300,200,250,20);
  bob1 = new Bob(200,450,10);
  bob2 = new Bob(250,450,10);
  bob3 = new Bob(300,450,10);
  bob4 = new Bob(350,450,10);
  bob5 = new Bob(400,450,10);
  rope1 = new Rope(bob1.body,{x:200,y:200});
  rope2 = new Rope(bob2.body,{x:250,y:200});
  rope3 = new Rope(bob3.body,{x:300,y:200});
  rope4 = new Rope(bob4.body,{x:350,y:200});
  rope5 = new Rope(bob5.body,{x:400,y:200});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



