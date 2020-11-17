
var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(50,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);

  car.velocityX = speed;

  car.shapeColor = color(255);

wall = createSprite(1300,200,60,height/2);
wall.shapeColor = (80,80,80);

}

function draw() {
  background(0); 
  
  if(wall.x - car.x <(wall.width + car.width)/2)
  {
   car.velocityx = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
  if (deformation>180)
  {
    car.shapeColor = color(255,0,0);
  }
  if (deformation<180 && deforation>100)
  {
    car.shapeColor = color(230,20,0);
  }
  if(deformation<100)
  {
    car.shapeColor = color(0,255,0);
  }
  }

  drawSprites();
}




