class Hat {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
    
}
  display() {
    //color
    fill(255, 219, 161);
    stroke(50);
    strokeWeight(5);

    //hat rotate
    push();
    translate(this.xPos,this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rect(this.xPos, 70, 70, 50);
    pop();

    //bottom hat
    push();
    translate(this.xPos,this.yPos);
    rotate(this.rotation);
    scale(this.size);
    rect(this.xPos, 100, 90, 20);
    pop(); 

  }
}