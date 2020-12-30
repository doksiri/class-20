var car, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = 4;
  car.shapeColor = "white";

  wall = createSprite(1000,200,20, height/2);
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0); 

  if(isTouching(car,wall)){
    car.shapeColor = "lime";
    car.velocityX = 0;
  }

drawSprites();
}

function isTouching(object1,object2){
  if (object1.x -object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false;
}
}

