
var particles, ground;
var plikos;
var divisions;

var divisionHeight=300;
var gameState ="start";



function setup() {
  ground = new Ground(599,590,1200,30);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plikos.push(new Pliko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plikos.push(new Pliko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plikos.push(new Pliko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plikos.push(new Pliko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
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
  
  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

  for (var i = 0; i < plikos.length; i++) {
     plikos[i].display();  
  }
 
  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
      
     if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
      score=score+500;
      particles.pop();
     }
    else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
      score = score + 100;
      particles.pop();
    }
    else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
      score = score + 200;
      particles.pop();
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
