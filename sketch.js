var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(200,100,80,30);
  movingRect.shapeColor="blue";

  rect1=createSprite(100,250,50,50);
  rect1.shapeColor = "blue";

  rect2=createSprite(250,300,100,100);
  rect2.shapeColor = "blue";
}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if( isTouching(movingRect,rect2)){
  rect2.shapeColor="red";
  movingRect.shapeColor="red";

 }
 else{
  rect2.shapeColor="blue";
  movingRect.shapeColor="blue";
 }
  drawSprites();
}
function isTouching(object1,object2){
  
  if(object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x < object1.width/2+object2.width/2 &&
    object2.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y < object1.height/2+object2.height/2)
    {
      return true
    }
    else{
      return false
    }

}