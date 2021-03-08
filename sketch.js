const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(800,400);
  isFired = false;
  engine = Engine.create();
  world = engine.world;
  //ground = new Floor(400,400,800,50);
  player = new block(100,200,50,50);
  points = 0;
  boxes = [];
  keys = [];
  sling1 = new SlingShot(player.body,{x:150, y:200});
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  //ground.display();
 
  sling1.display(); 
  player.display();
  if(frameCount%5 === 0){
  boxes.push(new block(random(300,800),-50,random(25,75),random(25,75)));
  }
  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
    if(boxes[i].body.position.y > 650){
      boxes.splice(i,1);
      //console.log("works");
    }
    if(boxes[i].body.position.x > 850){
      boxes.splice(i,1);
      points++;
    }
  }
  if(player.body.position.x > 800){
    points++;
    sling1.attach(player.body);
  Matter.Body.setPosition(player.body,{x:100,y:200});
  }
  if(player.body.position.y < 0){
    sling1.attach(player.body);
  Matter.Body.setPosition(player.body,{x:100,y:200});
  }
  if(player.body.position.y > 400){
    sling1.attach(player.body);
  Matter.Body.setPosition(player.body,{x:100,y:200});
  }
  if(player.body.position.x < 0){
    sling1.attach(player.body);
  Matter.Body.setPosition(player.body,{x:100,y:200});
  }
  if(!isFired && mouseIsPressed){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
  }
  if(keys[32] && isFired){
  sling1.attach(player.body);
  Matter.Body.setPosition(player.body,{x:100,y:200});
  //console.log("hi");
  }
  fill(0,0,0);
  textSize(20);
  textAlign(CENTER,CENTER);
  text("points: " + points, 400, 200);

}

function mouseReleased(){
  sling1.fly();
}
function keyReleased() {
  keys[keyCode] = false;
  //console.log(":D");
}
function keyPressed() {
  keys[keyCode] = true;
}
