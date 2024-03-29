var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var engine, world 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var cont =0;
var estadodeJogo= 'play'

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null){
      ball.display();
      if (ball.body.position.y>750){
        if  (ball.body.position.x<300){    
          score=score+500
          ball=null 
          if(cont>=5){
            estadodeJogo= 'end' 
          
          }     
       
       
       
       
       
        }
        else if (ball.body.position.x>301 && ball.body.position.x<600){    
          score=score+100
          ball=null 
          if(cont>=5){
            estadodeJogo= 'end' 
          }     
        }
        else if (ball.body.position.x>601 && ball.body.position.x<800){    
          score=score+200
          ball=null 
          if(cont>=5){
            estadodeJogo= 'end' 
          }     
        }
      }
    }
    


   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 if( estadodeJogo==='end'){
   text('GAMEOVER',400,400)
 }
}


function mousePressed(){
  if(estadodeJogo!== 'end'){
  ball=new Ball(mouseX, 10, 10, 10); 
  cont++ 
}
}
