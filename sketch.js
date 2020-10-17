
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = createSprite(400,690,800,10);
	ground.shapeColor = "brown";

 

	wall1 = new Dustbin(600,600,20,100);
	wall2 = new Dustbin(700,600,20,100);
	wall3 = new Dustbin(600,680,100,20);
    paper = new Paper(50,680);

	
  
}


function draw() {

  //rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
  
  drawSprites();
 
}
function keypPressed(){
if(keyCode === UP_ARROW){

Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:85})

}


}



