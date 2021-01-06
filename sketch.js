
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup
var score
var survivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  //ground.velocityX = -4;
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  console.log(ground.x);
  obstaclesGroup = createGroup();
  foodGroup = createGroup();

}

function draw() {
  background("white")
  if(keyDown("space")&&monkey.y > 200){
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
  
  survivalTime = 0;
  stroke("white");
  textSize(20)
  fill("white");   
  text("Score: "+ score, 500,200);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  spawnFood();
  spawnObstacles();
  drawSprites();
}
function spawnFood(){
  if (frameCount % 80 === 0) {
    banana = createSprite(300,400,50,50)
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 300;
    foodGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(300,327,50,50);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
 }
  }