var bg;
function preload(){
bg_img = loadImage("bg jungle.png")
}

function setup() {
  createCanvas(1000,600);
   bg = createSprite(500,300,800,600)
   bg.addImage(bg_img)
   bg.scale=1
}

function draw() {
  background("turquoise");  
  //making the ground move
  bg.velocityX=-3
  if(bg.x<0){
    bg.x= bg.width/2
  }
  drawSprites();
}