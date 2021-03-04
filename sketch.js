const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var ball;
var slingShot;
var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas=createCanvas(1200,400)
    ground = new Ground(600,height,1200,20);
    
    platform = new Ground(700,300,300,10);
    
    box1 = new Block(780,290,50,50);
    box2 = new Block(600,290,50,50);
    box3 = new Block(640,290,50,50);
    box4 = new Block(700,290,50,50);
    box5 = new Block(740,290,50,50);

    box6 = new Block(650,240,50,50);
    box7 = new Block(700,240,50,50);
    box8 = new Block(750,240,50,50)
  
    box9 = new Block(670,190,50,50);
    box10 = new Block(720,190,50,50);
  
    box11 = new Block(700,140,50,50);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingShot = new Slingshot(this.ball,{x:100,y:200});
}
function draw(){
    Engine.update(engine);
    background("pink")
    textSize(20)
    fill("black")
    text("Drag the Stone and Release it, to launch towards blocks",400,50);
    fill("black")
  //  ball.display()
    fill("red")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    fill("yellow")
    box6.display();
    box7.display();
    box8.display();
    fill("gold")
    box9.display();
    box10.display();
    fill("blue")
    box11.display();
    strokeWeight(4);
     ground.display()
    platform.display()
    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
  
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    slingShot.fly();
}