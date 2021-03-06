const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; var ground, ball;
 function setup(){
   var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;
   var ground_options = {
     isStatic: true
   }
   var ball_options={
restitution: 1.3
   }
ground = Bodies.rectangle(200,350,20,20, ground_options)
World.add(world,ground);
ball = Bodies.circle(200,200,15, ball_options)
World.add(world,ball)
 }



function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,350,20)
ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,15,15)


}