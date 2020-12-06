var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,ground2,ground3;

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

	ground1Sprite=createSprite(400,690, 200,20);
	ground1Sprite.shapeColor=color("red");

	ground2Sprite = createSprite(300,690,20,100);
	ground2Sprite.shapeColor = color("red");

	ground3Sprite = createSprite(500,690,20,100);
	ground3Sprite.shapeColor = color("red");


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	
	ground1 = Bodies.rectangle(400,680,200,20,{isStatic:true} );
	 World.add(world, ground1);
	 ground1.shapeColor = color("red");
	 
	ground2 = Bodies.rectangle(300,680,20 ,100, {isStatic:true} );
	 World.add(world, ground2);
	 ground2.shapeColor = color("red");
	 
	ground3 = Bodies.rectangle(500,680,20,100 , {isStatic:true} );
	 World.add(world, ground3);
	 ground3.shapeColor = color("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);
  
  background(0);
  
  drawSprites();
 
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);

  }
}



