
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope4,rope5;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
  roof1 = new roofclass(400,100,500,20);
 bobobject1=new Bob(210,400,50,50);
 bobobject2=new Bob(310,400,50,50);
 bobobject3=new Bob(410,400,50,50);
 bobobject4=new Bob(510,400,50,50);
 bobobject5=new Bob(610,400,50,50);
rope1= new Rope(bobobject1.body,{x:200,y:100});
rope2= new Rope(bobobject2.body,{x:300,y:100});
rope3= new Rope(bobobject3.body,{x:400,y:100});
rope4= new Rope(bobobject4.body,{x:500,y:100});
rope5= new Rope(bobobject5.body,{x:600,y:100});
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  roof1.display();
 rope1.display();
  rope2.display()
  rope3.display();
  rope4.display();  
  rope5.display();
  push();
  fill(254,0,254);
  bobobject1.display();
 bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  pop();
  drawSprites();
 
}



