 var fighter_plane,Plane_img;
 var asteroids,asteroidsImg;
var earth,earthImg;
var bg,bgImg;
var bullet,bulletImg;
var  blastImg;

 function preload(){
  Plane_img=loadImage("fighter.plane.png");
  asteroidsImg=loadImage("asteroids.png");
  earthImg=loadImage("earth.png");
  bgImg=loadImage("background.jpg");
  bulletImg = loadImage("bullet1.png");
  
 }
 
 
 function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(displayWidth/2,displayHeight/2,1000,1000);
  bg.addImage(bgImg);
bg.velocityY=1;

  fighter_plane=createSprite(displayWidth/2,displayHeight/2+50,30,30);
  fighter_plane.addImage(Plane_img);
  fighter_plane.scale=0.1;
  
  
  earth=createSprite(displayWidth/2,displayHeight/2+350,30,30);
  earth.addImage(earthImg);
  
  bulletG = new Group();   
 asteroidsG = new Group(); 
}

function draw() {
  background(255,255,255,); 

if(bg.y>500){
  bg.y=400;
}
  if(keyDown(LEFT_ARROW)){
    fighter_plane.x=fighter_plane.x-5;
}
if(keyDown(RIGHT_ARROW)){
  fighter_plane.x=fighter_plane.x+5;
}
if(keyWentDown("space")){
  shootBullet();
}
spawnAsteroids();
if (asteroidsG.isTouching(bulletG)){
  for(var i=0;i<asteroidsG.length;i++){
      if(asteroidsG[i].isTouching (bulletG)){
          asteroidsG[i].destroy();
          bulletG.destroyEach();
        } 
      }
  }
if (asteroidsG.collide(earth)){
  asteroidsG.destroyEach();
  earth.destroy();
}
if (asteroidsG.collide(fighter_plane)){
  asteroidsG.destroyEach();
  fighter_plane.destroy();
}

  drawSprites();
}

function spawnAsteroids(){
  if(frameCount%60===0){

  asteroids=createSprite(displayWidth/2,displayHeight/2-400,20,20);
  asteroids.addImage(asteroidsImg);
  asteroids.scale=0.1;
  asteroids.x=random(200,1100);
  asteroids.y=random(2,120);
asteroids.lifetime=500;
  asteroids.velocityY=+1;
  asteroidsG.add(asteroids);
  
  }
}
function shootBullet(){
  bullet= createSprite(displayWidth/2+100,displayHeight/2-100, 50,20)
  bullet.x= fighter_plane.x-2;
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityY=-2
  bulletG.add(bullet);
}


  

 

