var rect1,rect2
var rect1,rect2

function setup() {
    createCanvas(1200,1200)

    rect3=createSprite(400,200,50,50)
    rect4=createSprite(400,600,70,80)
    rect3.shapeColor="red"
    rect4.shapeColor="yellow"

    rect3.velocityY=4
    rect4.velocityY=-4

    rect1=createSprite(200,400,70,70)
    rect1.shapeColor="blue"

    rect2=createSprite(800,400,80,80)
    rect2.shapeColor="yellow"

   // rect1.velocityX=5
    //rect2.velocityX=-5

}
function draw() {
    background(0)

    //bounceOff(rect1,rect2)
    //bounceOff(rect3,rect4)
    rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1, rect2)){
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }


    drawSprites();
}



