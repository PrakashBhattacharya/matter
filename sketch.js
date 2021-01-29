
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,box2,ground,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new Box1(700,320,70,70);
    box2=new Box2(500,400,70,30);
    box3=new Box3(600,500,40,70);
    box4=new Box4(400,500,40,70);
    ground=new Ground(750,height,1800,20);
	
}


function draw() {
  background(0);
  Engine.run(engine);
  box1.display();
  ground.display();
  box2.display();
  box3.display();
  box4.display();
}



