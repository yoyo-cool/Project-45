const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var drops = []

var boy,thunder

function preload(){
  thunder1=loadImage("thunderbolt/1.png")
  thunder2=loadImage("thunderbolt/2.png")
  thunder3=loadImage("thunderbolt/3.png")
  thunder4=loadImage("thunderbolt/4.png")
  
}

function setup(){
    createCanvas(400,900)
    thunder=createSprite(100,0,100,100)
    engine = Engine.create();
    world = engine.world;
  
    Engine.run (engine)

    boy= new Umbrella(150,700,100,200)
   }

function draw(){
    background("black")
    Engine.update(engine);

    boy.display()
    thunder.display()
    for(i=0;i<=width;i=i+50){
        drops.push(new Drop(i,0))
      }
      if(frameCount%10===0)
      {
        drops.push(new Drop())
      }
    for(i=0;i<drops.length;i++){
        drops[i].display()
      }
      thunder.scale=0.5
      var rand = Math.round(random(1,6));
      switch(rand){
      case 1: thunder.addImage(thunder1)
      break;
      case 2: thunder.addImage(thunder2)
      break;
      case 3: thunder.addImage(thunder3)
      break;
      case 4: thunder.addImage(thunder4)
      break;
      }
    
}   

