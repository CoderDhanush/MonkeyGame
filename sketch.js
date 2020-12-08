
var player , player_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score=0
var ground
var survivalTime=0

function preload(){
  
  
  player_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(400,400)
  player=createSprite(80,315,20,20)
  player.addAnimation("moving",player_running);
  player.scale=0.1;
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  FoodGroup=new Group()
  
  obstaclesGroup=new Group()
  
  
}


function draw() {
  
  background(180)
  player.collide(ground)
  
if(ground.x<200){
  ground.x=350}
 
  console.log(ground.x)
  
if(keyDown("space")&&player.y>=250){
  player.velocityY=-10}
  player.velocityY = player.velocityY + 0.8
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,300,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
  if(obstaclesGroup.isTouching(player)){
    
    player.scale=0.08
    
    
  }
  
  
  if(FoodGroup .isTouching(player)){
    
    FoodGroup.destroyEach();
score = score + 2;
}
switch(score){
    case 15: player.scale=0.12;
            break;
    case 25: player.scale=0.14;
            break;
    case 35: player.scale=0.16;
            break;
    case 45: player.scale=0.18;
            break;
    default: break;
}
    
    
    
    
  
  
  
  
  
  
spawnFood()
  spawnObstacles()
  
drawSprites()
  
  
  
  
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
    
    
 
    
    
    
    
    
    
    
    
    
  }
}

function spawnObstacles() {
  if(frameCount % 100 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }}

 






