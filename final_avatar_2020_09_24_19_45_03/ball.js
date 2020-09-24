class Ball {
  constructor(_xPos, _yPos, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
     
  }
  
  display() {
  fill (190, 221, 255);
  stroke (166, 208, 255);

  push();
  scale(this.size);
  ellipse (this.xPos, this.yPos ,100); 
  pop();
  }
  
  move(){
    if (this.yPos <= height * 1.6) {
    this.yPos += 1.5
    }else {
    this.yPos = -height * 1;
  }
 
  
  }
  
}