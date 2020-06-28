//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,30);
	World.add(world, ground);
	paper = new Paper(200,635,70,70);
	World.add(world,paper);
    dustbin = new Dustbin(680,635,50,40);
	World.add(world,dustbin);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

   
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function jump(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

