function setup() {
    createCanvas(600, 600);
    background("rgb(255,192,243)");
  }
  
  function draw() {
    
    
    stroke(" purple");
    fill(" purple");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,35);
    }
    
    
  }