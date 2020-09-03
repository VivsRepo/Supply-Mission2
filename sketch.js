var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)

	box1=createSprite(350, 660, 200,20);
	box1.shapeColor= "red";
	box2=createSprite(250, 620, 20,100);
	box2.shapeColor= "red";
	box3=createSprite(450, 620, 20,100);
	box3.shapeColor= "red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = Bodies.rectangle(350, 660, 200,20, {isStatic:true} );
	World.add(world, box1);
	box2 = Bodies.rectangle(250, 620, 20 , {isStatic:true} );
	World.add(world, box2);
	box3 = Bodies.rectangle(450, 620, 20 , {isStatic:true} );
 	World.add(world,box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



