var object1,object2;

  function setup() {
  createCanvas(1200,800);
  object1 = createSprite(400, 100, 50, 80);
  object1.shapeColor = "white";
  object1.velocityY = 5;
  object2 = createSprite(400,800,80,50);
  object2.shapeColor = "white";
  object2.velocityY = -5;
  }

function draw() {
  background(0); 

  if(bounceOff(object2,object1)) {
    object1.shapeColor = "red";
    object2.shapeColor= "yellow";

  }
  else{
    object1.shapeColor = "white";
    object2.shapeColor= "white";
  }
  drawSprites();
}


function bounceOff( object1,object2){
if(object1.x-object2.x<(object1.width+object2.width)/2 
&& object2.x-object1.x<(object2.width + object1.width)/2){
  object1.velocityX = object1.velocityX*(-1);
  object2.velocityX = object2.velocityX*(-1);
}



if(object1.y-object2.y < (object1.height+object2.height)/2
&& object2.y-object2.y < (object2.height+ object2.height)/2){
  object1.velocityY = object1.velocityY*(-1);
  object2.velocityY = object2.velocityY*(-1);
}

return true;
}