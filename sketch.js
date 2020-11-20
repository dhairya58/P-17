var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
   ground = createSprite(300,390,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  monkey = createSprite(50,370,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;

  
  
}


function draw() {
 background(180);

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(keyDown("space")){
    monkey.velocityY=-2;
  }
    
  monkey.velocityY=monkey.velocityY+0.5;
  
  monkey.collide(ground);
    
  spawnFruits();
  spawnObstacles();
  
  drawSprites();
}

function spawnFruits(){
  if(frameCount%150===0){
  banana = createSprite(380,370,20,20);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-2;
    banana.y=Math.round(random(60,200));
}
}

function spawnObstacles(){
  if(frameCount%150===0){
     obstacle = createSprite(380,370,20,20);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-2;
  }
}









