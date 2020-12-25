var obj2,obj1;
function setup() {
  createCanvas(800,400);
  obj2 = createSprite(400, 200, 50, 50);  
  obj2.shapeColor="green"
  obj1 = createSprite(500,100,70,80);
  obj1.shapeColor="green" 
}

function draw() {
  background(0);  
  obj1.x=World.mouseX
  obj1.y=World.mouseY
  if (obj1.x-obj2.x < obj1.width/2 +obj2.width/2
    && obj2.x-obj1.x < obj1.width/2 +obj2.width/2
    && obj1.y-obj2.y < obj1.height/2 +obj2.height/2
    && obj2.y-obj1.y < obj1.height/2 +obj2.height/2  ){
    obj2.shapeColor="red"
    obj1.shapeColor="red"
  }
  else 
  {
    obj2.shapeColor="green"
    obj1.shapeColor="green"
  }
  drawSprites();
}