var spacer;

function setup() {
  createCanvas(720, 720);
  spacer = width/6
}

function draw() {
  background(255);
  
  translate(spacer,spacer);
  for (var i = 0; i<5; i++){
  for (var j = 0; j<5; j++){
    var x = spacer*i
    var y = spacer*j
    var d;
    var f;
    //02A
    //d = 20; 
    
    //02B
    //d = 20+i*20;
    
    //02C
    //d = 100-j*20;
    
    //02D
    //d = 100-(i*10)-(j*10);
    
    //02E
    //d = random(80,100);
    
    //02f
    //d = random(20,200);
    
    //02G
   // var c = dist(x+spacer,y+spacer,mouseX,mouseY); 
   // d = map(c,0,800,20,200);
    
    //02H
    var c = dist(x+spacer,y+spacer,mouseX,mouseY); 
    d = map(c,0,800,200,20);
    
    
    
    fill(0);
    noStroke();
    ellipse(x,y,d,d);  
    }
  }
}