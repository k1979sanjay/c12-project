var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg

function preload(){
gardenImg=loadImage("garden.png");
rabbitImg=loadImage("rabbit.png");
appleImg=loadImage("apple.png");
leafImg=loadImage("leaf.png");
}

function setup(){
createCanvas(400,400);
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit=createSprite(180,340,30,30);
rabbirt.scale=0.09;
rabbit.addImage(rabbitImg);
}


function draw(){
background(0)
edges=createEdgeSprites();
rabbit.collide(edges);
rabbit.x=World.mouseX
var select_sprites=Math.round(random(1,2));
if(framecount%100==0){
if(select_sprites==1)
{createApples();}
else if (select_sprites==2){
createleaves();}
else{createleaves();}}
drawSprites();
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale=0.1;
apple.velociyY=5;
apple.lifetime=150;
}

function createleaves(){
leaf=createSprite(random(50,350),40,10,10)
leaf.addImage(appleImg)
leaf.scale=0.1
leaf.velocityY=5;
leaf.lifetime=150;


}