const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var gamestate = "onsling"
function preload (){
    backgroundIMG = loadImage("images/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,height,2000,20)
    platform = new Ground (150,305,300,170)
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    pig1 = new pig(810,350)
    log1 = new log(810,260,300,PI/2)

    box3 = new box (700,240,70,70)
    box4 = new box (920,240,70,70)
    pig2 = new pig (810,220)
    box5 = new box (810,160,70,70)
    log2 = new log (810,180,300,PI/2)
    log3 = new log (760,120,150,PI/7)
    log4 = new log (870,120,150,-PI/7)
    bird1 = new bird (200,50)
    //log5 = new log (230,180,80,PI/2)
    newSling= new Slingshot (bird1.body,{x : 200, y : 50})
}

function draw(){
    background(backgroundIMG);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display()
    pig2.display();
    log1.display()
    box3.display()
    box4.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird1.display()
    //log5.display()
    newSling.display()
    platform . display()

}
function mouseDragged () {
    if (gamestate !== "launched"){
Matter.Body.setPosition(bird1.body,{x : mouseX , y : mouseY})
}
}
function mouseReleased () {
newSling.fly ()
gamestate = "launched"
}
function keyPressed () {
//if (keyCode === 32)
//newSling.attached(bird1.body)
}



