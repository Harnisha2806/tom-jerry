var tom , tomImg;
var jerry , jerryImg, jerryImg2 ,jerryImg3;
var garden , gardenImg , gardenImg2 , gardenImg3;

function preload() {
  
gardenImg = loadImage("images/garden.png");

tomImg = loadImage("images/cat1.png");
tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
tomImg3 = loadImage("images/cat4.png");

jerryImg = loadImage("images/mouse1.png");
jerryImg2 =loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg3 =loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(100,400,10,10);
garden.addImage(gardenImg);
garden.scale = 1.12;

tom = createSprite(500,460,10,10);
tom.addImage( "cat",tomImg);
tom.scale = 0.12;

tom.setCollider("rectangle",0,0,tom.width,tom.height);


jerry = createSprite(200,650,10,10);
jerry.addAnimation("mouse",jerryImg);
jerry.changeAnimation("mouse");
jerry.scale = 0.13;

jerry.setCollider("rectangle",0,0,400,400);


}

function draw() {

    background(255);

if(tom.x - jerry.x < (tom.width - jerry.width)/2){
  jerry.setVelocity(0,0);
  tom.setVelocity(0,0);
 
}

    //Write condition here to evalute if tom and jerry collide
    happy();
   keyPressed();
    drawSprites();
}


function keyPressed(){
 if(keyCode === LEFT_ARROW) { 
  tom.setVelocity(-4,3);

  tom.addAnimation("cat-walking",tomImg2);
  tom.changeAnimation("cat-walking");

  jerry.addAnimation("jerry-dance",jerryImg2);
  jerry.changeAnimation("jerry-dance");

 }
 //For moving and changing animation write code here
}

function happy(){
  if(tom.y > 640){
    tom.x = 300; 
    tom.y = 645;

    tom.addImage("happy",tomImg3)
    tom.changeImage("happy");

    jerry.addImage("pleasent",jerryImg3);
    jerry.changeImage("pleasent");
  }
}
