var backgroundImage, background1, bow, arrow;
var balloonGroup, balloon1, balloon2, balloon3, balloon4;
var score = 0;

function preload(){
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage ("bow0.png");
  arrowImage = loadImage ("arrow0.png");
  
  balloon_1= loadImage ("blue_balloon0.png");
  balloon_2= loadImage ("green_balloon0.png");
  balloon_3= loadImage ("pink_balloon0.png");
  balloon_4= loadImage ("red_balloon0.png");
  
 //load your images here 
 
  
}

function setup() {
  createCanvas(600, 600);
 
  //create background
  background1 = createSprite (600,100, 600,600);
  background1.addImage (backgroundImage);
  background1.scale = 3
  
  //create bow sprite
  bow = createSprite (460, 340, 20, 50);
  bow.addImage(bowImage);
  

  
 

  
  
 
}

function draw() {
  
  background(" white");
  
  background1.velocityX= -4
  //add code here
  
 if (background1.x< 10){
   background1.x = background1.width/2;
 
 }
  
  bow.y=mouseY;
  
   var select_balloon =  Math.round(random(1,4));
console.log(select_balloon)
  
  if (frameCount % 80 === 0) {
  
  if (select_balloon === 1) {   
    RedBalloons();}
  else if (select_balloon === 2){
    BlueBalloons();}
  else if (select_balloon === 3){
    PinkBalloons();}
  else {
    GreenBalloons();}
  }
  
  if (keyDown("space")){
   arrow.velocityX = -10
  }
  
  
  spawnArrows();
  
  
 
  drawSprites();
  
  textSize (15);
  text("score;" + score, 100, 100);
}

function RedBalloons() {
   var red = createSprite (0, Math.round(random(20, 300)), 10, 10);
   red.addImage (balloon_4)
   red.velocityX = 5;
   red.lifetime = 150;
   red.scale = 0.079
}

function BlueBalloons() {
   var blue = createSprite (0, Math.round(random(20, 300)), 10, 10);
   blue.addImage (balloon_1)
   blue.velocityX = 5;
   blue.lifetime = 150;
   blue.scale = 0.07
}

function PinkBalloons() {
   var pink = createSprite (0, Math.round(random(100, 370)), 10, 10);
   pink.addImage (balloon_3)
   pink.velocityX = 5;
   pink.lifetime = 150;
   pink.scale = 0.95
}

function GreenBalloons() {
   var green = createSprite (0, Math.round(random(20, 300)), 10, 10);
   green.addImage (balloon_2)
   green.velocityX = 5;
   green.lifetime = 150;
   green.scale = 0.07
}

function spawnArrows(){
  
  //create arrrow sprite
  arrow = createSprite (380, 340, 20, 50);
  arrow.addImage(arrowImage);
  arrow.scale = 0.4;
  arrow.visible=false;
  arrow.y = bow.y;
  if (keyDown("space")){
   arrow.velocityX=-10;
   arrow.visible = true;
  }
}
